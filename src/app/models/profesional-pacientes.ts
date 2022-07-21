export class ProfesionalPacientes {
    
    public id_profesional_pacientes:number;
    public id_user:number;
    public id_profesional:number;
    public contenido_presentacion:string;
    public aceptado:number;
    public contenido_rechazo:string;
    public diagnostico:string;

    constructor(id_user:number,id_profesional:number,contenido_presentacion:string,aceptado:number, contenido_rechazo:string,diagnostico:string){

        this.id_profesional_pacientes=0;
        this.id_user=id_user;
        this.id_profesional=id_profesional;
        this.contenido_presentacion=contenido_presentacion;
        this.aceptado=aceptado;
        this.contenido_rechazo=contenido_rechazo;
        this.diagnostico=diagnostico;
    }

}
