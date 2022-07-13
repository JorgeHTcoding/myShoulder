import { User } from "./user";

export class Registro{
    public user: User;
    public pass2:string;

    constructor(user:User,pass2:string){
        this.user = user;
        this.pass2 = pass2;
    }
}