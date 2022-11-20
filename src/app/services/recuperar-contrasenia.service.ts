import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangePasswordDTO } from '../models/change-password-dto';
import { EmailValuesDTO } from '../models/email-values-dto';
import { environment } from './../../environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class RecuperarContraseniaService {


  private baseEndpoint = '/api/cliente-usuario/email-password';
  private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  //changePasswordURL = environment.changePasswordURL;
  constructor(private http: HttpClient) { }

  public sendEmail(dto: EmailValuesDTO): Observable<any> {
    return this.http.post<any>(this.baseEndpoint + '/send-email', dto);
  }

  public changePassword(dto: ChangePasswordDTO): Observable<any> {
    return this.http.post<any>(this.baseEndpoint + '/update_password', dto);
  }
}