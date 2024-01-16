import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendGrupoCyrForm(nombre: string, email: string, telefono: string,
                   servicio: string, mensaje: string): Observable<any> {
    return this.http.get(environment.mailUrl,
            { responseType: 'text', params: { nombre, email, telefono, servicio, mensaje}} );
            }
}
