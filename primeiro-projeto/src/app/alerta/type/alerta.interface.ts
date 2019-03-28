export class AlertaType {

    nome: string;
    serveridadePorEtapa: Map<string, string>;

    constructor(theName: string){
        this.nome = theName;
    }
}