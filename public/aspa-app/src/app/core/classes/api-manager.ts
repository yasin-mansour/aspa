export default class ApiManager {
  uri: string;
  objectToInsert = [];
  objectToDelete = [];
  objectToUpdate = [];
  syncTimeout;

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
    const oldInsert = this.objectToInsert.concat([]);
    const oldDelete = this.objectToDelete.concat([]);
    const oldUpdate = this.objectToUpdate.concat([]);
    this.reset();

    const updatePromise = this.http.post(this.uri + '/update', this.setData(oldUpdate.concat(oldInsert)), null, false).toPromise();
    const deletePromise = this.http.post(this.uri + '/delete', this.setData(oldDelete), null, false).toPromise();

    return Promise.all([updatePromise, deletePromise]).then(data => {

      if (this.syncTimeout) {
        clearTimeout(this.syncTimeout);
        this.syncTimeout = null;
      }

    }, err => {
      this.objectToInsert.concat(oldInsert);
      this.objectToDelete.concat(oldDelete);
      this.objectToUpdate.concat(oldUpdate);
    });
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

  registerChange() {
    if (this.syncTimeout) {
      return;
    }
    this.syncTimeout = setTimeout(this.sync.bind(this), 5000);
  }
}
