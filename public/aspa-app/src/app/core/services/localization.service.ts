import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ApiConstants} from '../../utils/api-constants';
import {HttpCommunicationService} from './http-communication.service';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class LocalizationService {
  selectedLanguage;

  constructor(private http: HttpCommunicationService, private translate: TranslateService) {

  }

  public setLocalization() {
    const user = this.http.user;
    const languages = user.languages.map(language => {
      return language.name;
    });
    this.selectedLanguage = user.languages[0];
    if (user.user) {
      const language = user.languages.filter((language) => {
        return user.user.language_id === language.id;
      });

      if (language) {
        this.selectedLanguage = language[0];
      }
    }

    this.translate.addLangs(languages);
    // this.translate.setDefaultLang(languages[0]);

    // const browserLang = this.translate.getBrowserLang();
    this.translate.use(this.selectedLanguage.name);
  }

  getLanguageDirection() {
    return this.selectedLanguage && this.selectedLanguage.direction === 0 ? 'rtl' : 'ltr';
  }

  getLanguageOrder() {
    return this.selectedLanguage && this.selectedLanguage.direction === 0 ? -1 : 1;
  }
}

