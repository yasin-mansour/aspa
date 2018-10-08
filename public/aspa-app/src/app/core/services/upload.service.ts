import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

const url = '/api/upload';

@Injectable()
export class UploadService {
  constructor(private http: HttpClient) {
  }

  public upload(files: Array<any>, ): { [key: string]: {progress: Observable<number>} } {
    // this will be the our resulting map
    const status = {};

    files.forEach(file => {
      // create a new multipart-form for every file
      const formData: FormData = new FormData();
      formData.append('file', file.data, file.name);
      formData.append('profile', file.profile);
      formData.append('privilege', file.privilege);
      formData.append('category_id', file.category_id || null);
      formData.append('display_name', file.display_name || null);
      formData.append('course', file.course || null);
      formData.append('class', file.class || null);

      // create a http-post request and pass the form
      // tell it to report the upload progress
      const req = new HttpRequest('POST', this.buildUrl(url), formData, {
        reportProgress: true
      });

      // create a new progress-subject for every file
      const progress = new Subject<number>();

      // send the http-request and subscribe for progress-updates
      this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {

          // calculate the progress percentage
          const percentDone = Math.round(100 * event.loaded / event.total);

          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {

          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          progress.complete();
        }
      });

      // Save every progress-observable in a map of all observables
      status[file.name] = {
        progress: progress.asObservable()
      };
    });

    // return the map of progress.observables
    return status;
  }

  buildUrl(url) {
    return environment.SERVER_NAME + url;
  }

}
