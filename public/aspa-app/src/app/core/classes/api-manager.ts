export default class ApiManager {
  uri: string;
  objectToInsert = [];
  objectToDelete = [];
  objectToUpdate = [];
  syncTimeout;
  syncPromise;

  constructor(uri, private http) {
    this.uri = uri;
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  insert(object) {
    this.registerChange();
    this.objectToInsert.push(object);
  }

  delete(object) {
    if (!this.trimObject(this.objectToInsert, object)) {
      this.trimObject(this.objectToUpdate, object);
      this.objectToDelete.push(object.id);
      this.registerChange();
    }
  }

  update(object) {
    if (this.objectToInsert.indexOf(object) === -1 && this.objectToUpdate.indexOf(object) === -1) {
      this.objectToUpdate.push(object);
      this.registerChange();
    }
  }


  sync() {

    // one sync process at a time.
    if (this.syncPromise) {
      return new Promise((resolve, reject) => {
        resolve([]);
      });
    }

    const oldInsert = this.objectToInsert.concat([]);
    const oldDelete = this.objectToDelete.concat([]);
    const oldUpdate = this.objectToUpdate.concat([]);

    const updatePromise = this.http.post(this.uri + '/update', this.setData(oldUpdate.concat(oldInsert)), null, false).toPromise();
    const deletePromise = this.http.post(this.uri + '/delete', this.setData(oldDelete), null, false).toPromise();

    this.syncPromise = Promise.all([updatePromise, deletePromise]).then(data => {

      this.setNewWordsId(data[0]); // 0 => data return from the update api
      this.reset();
      this.resetSyncPromise();
      if (this.syncTimeout) {
        clearTimeout(this.syncTimeout);
        this.syncTimeout = null;
      }

    }, err => {
      this.resetSyncPromise();
    });

    return this.syncPromise;
  }

  trimObject(array, object) {
    const index = array.indexOf(object);
    if (index > -1) {
      array.slice(index, 1);
      return true;
    }

    return false;
  }

  setData(data) {
    return {
      data: data
    };
  }

  reset() {
    this.objectToInsert = [];
    this.objectToDelete = [];
    this.objectToUpdate = [];
  }

  resetSyncPromise() {
    this.syncPromise = null;
  }

  registerChange() {
    if (this.syncTimeout || this.syncPromise) {
      return;
    }
    this.syncTimeout = setTimeout(this.sync.bind(this), 5000);
  }

  setNewWordsId(ids) {
    ids.map((id, index) => {
      this.objectToInsert[index].id = id;
    });
  }
}
