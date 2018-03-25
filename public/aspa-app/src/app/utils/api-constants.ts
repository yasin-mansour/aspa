import {environment} from '../../environments/environment';

export class ApiConstants {
  public static readonly TOKEN_PATH: string = environment.API_PATH + '/token';
  public static readonly WORDS: string = environment.API_PATH + '/word';
  public static readonly WORDS_API: string = environment.API_PATH + '/words';
  public static readonly REGISTER_USER: string =  '/register';
  public static readonly LOGOUT_USER: string =  '/logout';
}
