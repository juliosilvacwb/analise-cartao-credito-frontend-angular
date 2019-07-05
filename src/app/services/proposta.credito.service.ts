import { PropostaCredito } from '../models/proposta.credito.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Api } from './api.path';

@Injectable({ providedIn: 'root' })
export class PropostaCreditoService {

    constructor(private http: HttpClient) { }

    consultar(cpf: string): Observable<HttpResponse<PropostaCredito[]>> {
        return this.http.get<PropostaCredito[]>(`${Api.path}/propostas?cpf=${cpf}`, { 
            headers: new HttpHeaders({'Accept':'application/json; charset=utf-8;'}),
            observe: 'response'
        });
    }

    salvar(proposta: PropostaCredito): Observable<PropostaCredito> {
        return this.http.post<PropostaCredito>(`${Api.path}/propostas`, proposta, { 
            headers: new HttpHeaders({
                'Content-Type':'application/json; charset=utf-8;',
                'Accept':'application/json; charset=utf-8;'
            })
        });
    }
}