export class Paciente {
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
    public id_profesional_paciente:number;
    public id_profesional:number;
    public contenido_presentacion:string;
    public aceptado:string;
    public contenido_rechazado;
    public diagnostico;

    constructor(tipo:string,nick:string,name:string,sname:string,email:string,telefono:number,descripcion:string,
        img:string,direccion:string,acreditacion:string,horario:string,modalidad:string,password:string
        ,id_profesional_paciente:number, id_profesional:number,contenido_presentacion:string, aceptado:string,
         contenido_rechazado,diagnostico){

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
            this.id_profesional_paciente =id_profesional_paciente;
            this.id_profesional=id_profesional;
            this.contenido_presentacion=contenido_presentacion;
            this.aceptado=aceptado;
            this.contenido_rechazado=contenido_rechazado;
            this.diagnostico=diagnostico;
    }
}
