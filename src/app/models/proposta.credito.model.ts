import { Cliente } from './cliente.model';
import { ResultadoAnalise } from './resultado.analise';

export class PropostaCredito {
    id: number
    cliente: Cliente
    resultadoAnalise: ResultadoAnalise;
    versao: number

    constructor() {
        this.cliente = new Cliente();
    }
}