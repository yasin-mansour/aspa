import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ApiConstants} from '../../utils/api-constants';
import {HttpCommunicationService} from './http-communication.service';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class LocalizationService {
  setDirectionCallback;
  splitOrder = 1;
  direction = 'ltr';

  constructor(private http: HttpCommunicationService, private translate: TranslateService) {

  }

  public setLocalization() {
    const user = this.http.user;
    const languages = user.languages.map(language => {
      return language.name;
    });
    let selectedLanguage = user.languages[0];
    if (user.user) {
      const language = user.languages.filter((language) => {
        return user.user.language_id === language.id;
      });

      if (language) {
       selectedLanguage = language[0];
      }
    }

    this.translate.addLangs(languages);
    // this.translate.setDefaultLang(languages[0]);

    // const browserLang = this.translate.getBrowserLang();
    this.translate.use(selectedLanguage.name);
    const direction = this.getLanguageDirection(selectedLanguage);
    this.setAppDirection(direction);
    this.getLanguageOrder(selectedLanguage);
  }

  getLanguageDirection(language) {
    this.direction = language && language.direction === 0 ? 'rtl' : 'ltr';
    return this.direction;
  }

  setAppDirection(direction) {
    if (this.setDirectionCallback) {
      this.setDirectionCallback(direction);
    }
  }

  getLanguageOrder(language) {
    this.splitOrder = language && language.direction === 0 ? -1 : 1;
    return this.splitOrder;
  }
}

