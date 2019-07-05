import {Estado} from '../models/estado.model';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EstadosService {

    constructor(){}

    private e = new BehaviorSubject<Estado[]>(
        JSON.parse(`[{"id":1,"nome":"Acre","uf":"AC","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":2,"nome":"Alagoas","uf":"AL","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":3,"nome":"Amazonas","uf":"AM","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":4,"nome":"Amapá","uf":"AP","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":5,"nome":"Bahia","uf":"BA","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":6,"nome":"Ceará","uf":"CE","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":7,"nome":"Distrito Federal","uf":"DF","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":8,"nome":"Espírito Santo","uf":"ES","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":9,"nome":"Goiás","uf":"GO","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":10,"nome":"Maranhão","uf":"MA","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":11,"nome":"Minas Gerais","uf":"MG","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":12,"nome":"Mato Grosso do Sul","uf":"MS","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":13,"nome":"Mato Grosso","uf":"MT","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":14,"nome":"Pará","uf":"PA","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":15,"nome":"Paraíba","uf":"PB","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":16,"nome":"Pernambuco","uf":"PE","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":17,"nome":"Piauí","uf":"PI","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":18,"nome":"Paraná","uf":"PR","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":19,"nome":"Rio de Janeiro","uf":"RJ","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":20,"nome":"Rio Grande do Norte","uf":"RN","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":21,"nome":"Rondônia","uf":"RO","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":22,"nome":"Roraima","uf":"RR","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":23,"nome":"Rio Grande do Sul","uf":"RS","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":24,"nome":"Santa Catarina","uf":"SC","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":25,"nome":"Sergipe","uf":"SE","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":26,"nome":"São Paulo","uf":"SP","pais":{"id":1,"nome":"Brasil","sigla":"BR"}},
        {"id":27,"nome":"Tocantins","uf":"TO","pais":{"id":1,"nome":"Brasil","sigla":"BR"}}]`)
    );

    getEstados() {
        return this.e.asObservable();
    }

}