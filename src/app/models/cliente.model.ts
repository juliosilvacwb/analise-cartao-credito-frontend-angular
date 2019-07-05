export class Cliente {
    id: number
    nome: string;
    cpf: string;
    dataNascimento: string;
    sexo: string;
    estadoCivil: string;
    estado: string;
    dependentes: number;
    renda: number
    versao: number
    idade: number

    constructor() {
        this.estadoCivil = '';
        this.estado = '';
    }
}