export class Estado {
    public id: number;
    public nome: string;
    public uf: string;

    set(nome, uf){
        this.nome = nome;
        this.uf = uf;
        return this;
    }
}