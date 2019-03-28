import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AlertaType } from '../type/alerta.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertaListService {

  private alertasUrl = 'https://secweb.tef.intra.rs.gov.br:443/vei/rest/alerta';

  constructor(private http: HttpClient) { }

  getAlertas() : Observable<AlertaType[]> {
    return this.http.get<AlertaType[]>(this.alertasUrl);
  }

}
