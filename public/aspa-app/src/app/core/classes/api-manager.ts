export default class ApiManager {
  uri: string;
  objectToAdd = [];
  objectToRemove = [];
  objectToUpdate = [];

  constructor(uri) {
    this.uri = uri;
  }

  add(object) {
    this.objectToAdd.concat(object);
  }

  remove(object) {
    if (!this.trimObject(this.objectToAdd, object)) {
      this.trimObject(this.objectToUpdate, object);
      this.objectToRemove.concat(object);
    }
  }

  update(object) {
    this.objectToUpdate.concat(object);
  }


  trimObject(array, object) {
    const index = array.indexOf(object);
    if (index > -1) {
      array.slice(index, 1);
      return true;
    }

    return false;
  }
}
