export class Gevento {
    public id_eventos:number;
    public anfitrion:number;
    public titulo:string;
    public localidad:string;
    public direccion:string;
    public descripcion:string;
    public modalidad:number;
    public terapia:string;
    public fecha:string;
    public img:string;

    constructor(id_eventos:number,anfitrion:number,titulo:string,localidad:string,direccion:string,descripcion:string,modalidad:number,terapia:string,fecha:string,img:string){

    this.id_eventos = id_eventos;
    this.anfitrion = anfitrion;
    this.titulo = titulo;
    this.localidad = localidad;
    this.direccion = direccion;
    this.descripcion = descripcion;
    this.modalidad = modalidad;
    this.terapia = terapia;
    this.fecha=fecha;
    this.img=img;
}
}
