import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ElementMapService {
  elements: any = {};

  public addElement(name, element) {
    this.elements[name] = element;
  }

  public getElement(name) {
    if (this.elements[name]) {
      return this.elements[name];
    }
    return null;
  }

  public removeElement(name) {
    delete this.elements[name];
  }
}

