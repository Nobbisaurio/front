import {environment} from "@environments/environment";

export class ApiAuth {
  public static readonly urlAuth = environment.urlBase + '/auth';
  public static readonly urlLogin =  ApiAuth.urlAuth + '/login';
  public static readonly urlRegister = ApiAuth.urlAuth + '/register';
  public static readonly urlConfirmEmail = ApiAuth.urlAuth + '/confirm-email';
  public static readonly urlForgetPassword = ApiAuth.urlAuth + '/forget-password';
  public static readonly urlResetPassword = ApiAuth.urlAuth + '/reset-password';
  public static readonly urlChangePassword = ApiAuth.urlAuth + '/change-password';
}
