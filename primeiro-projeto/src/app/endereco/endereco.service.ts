import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EnderecoCorreios } from './endereco-correios';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  getEndereco(cep) : Observable<EnderecoCorreios> {
    return this.http.get<EnderecoCorreios>(`https://viacep.com.br/ws/${cep}/json/`);
  }

}
