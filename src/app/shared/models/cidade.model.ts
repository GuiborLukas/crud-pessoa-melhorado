import { Estado } from ".";

export class Cidade {
    constructor(
        public id?: number,
        public nome?: string,
        public estado?: Estado) { }
}
