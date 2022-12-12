import { Cidade } from "./cidade.model";

export class Endereco {
    constructor(
        public id?: number,
        public tipo?: string,
        public logradouro?: string,
        public numero: number = 0,
        public complemento?: string,
        public bairro?: string,
        public cep?: string,
        public cidade?: Cidade,
        public residencial?: boolean){
    }
}
