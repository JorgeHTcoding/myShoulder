export class Filtro {

    public localidad:string;
    public modalidad:string;
    public acreditacion:string;
    public fecha:string;

    constructor(localidad:string,modalidad:string,acreditacion:string,fecha:string){

        this.localidad = localidad;
        this.modalidad = modalidad;
        this.acreditacion = acreditacion;
        this.fecha = fecha;
    }
}
