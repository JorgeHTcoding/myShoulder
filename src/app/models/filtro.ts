export class Filtro {

    public localidad:string;
    public modalidad:string;
    public terapia:string;
    public fecha:string;

    constructor(localidad:string,modalidad:string,terapia:string,fecha:string){

        this.localidad = localidad;
        this.modalidad = modalidad;
        this.terapia = terapia;
        this.fecha = fecha;
    }
}
