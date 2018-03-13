import {environment} from '../../environments/environment';

export class ApiConstants {
  public static readonly TOKEN_PATH: string = environment.API_PATH + '/token';
  public static readonly REGISTER_USER: string =  '/register';
  public static readonly LOGOUT_USER: string =  '/logout';
}
