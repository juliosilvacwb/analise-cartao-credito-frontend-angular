import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EstadoCivil } from '../models/estado.civil.model';

@Injectable({
    providedIn: 'root'
})
export class EstadoCivilService {

    constructor(){}

    private e = new BehaviorSubject<EstadoCivil[]>(
        [
            {"id":1,"nome":"Solteiro(a)", "valor":"Solteiro"},
            {"id":2,"nome":"Casado(a)", "valor":"Casado"},
            {"id":3,"nome":"Divorciado(a)", "valor":"Divorciado"},
            {"id":4,"nome":"Viúvo(a)", "valor":"Viuvo"}
        ]
    );

    getEstadosCivis() {
        return this.e.asObservable();
    }

}