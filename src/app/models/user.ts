export class User {
    
    public id_user:number;
    public tipo:string;
    public nick:string;
    public name:string;
    public sname:string;
    public email:string;
    public telefono:number;
    public descripcion:string;
    public img:string;
    public direccion:string;
    public acreditacion:string;
    public horario:string;
    public modalidad:string;
    public password:string;

    constructor(tipo:string,nick:string,name:string,sname:string,email:string,telefono:number,descripcion:string,
        img:string,direccion:string,acreditacion:string,horario:string,modalidad:string,password:string){

            this.id_user = 0;
            this.tipo = tipo;
            this.nick = nick;
            this.name = name;
            this.sname = sname;
            this.email = email;
            this.telefono = telefono;
            this.descripcion = descripcion;
            this.img = img;
            this.direccion = direccion;
            this.acreditacion = acreditacion;
            this.horario = horario;
            this.modalidad = modalidad;
            this.password = password;

    }    
}
