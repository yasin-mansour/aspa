import {environment} from '../../environments/environment';

export class ApiConstants {
  public static readonly TOKEN_PATH: string = environment.API_PATH + '/token';
  public static readonly WORDS: string = environment.API_PATH + '/word';
  public static readonly WORDS_API: string = environment.API_PATH + '/words';
  public static readonly GENERATE_LOCALIZATION: string = environment.API_PATH + '/generateJson';
  public static readonly AUTO_COMPLETE: string = environment.API_PATH + '/user/auto_complete';
  public static readonly CREATE_CLASS: string = environment.API_PATH + '/class/create';
  public static readonly GET_COURSES: string = environment.API_PATH + '/class';
  public static readonly GET_CLASS: string = environment.API_PATH + '/class';
  public static readonly REGISTER_USER: string =  '/register';
  public static readonly LOGOUT_USER: string =  '/logout';
}
