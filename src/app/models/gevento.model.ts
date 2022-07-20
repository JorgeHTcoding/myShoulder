export class Gevento {
    public id_eventos:number;
    public anfitrion:number;
    public titulo:string;
    public localidad:string;
    public direccion_even:string;
    public descripcion_even:string;
    public modalidad:number;
    public terapia:string;
    public fecha:string;
    public img:string;
    public id_user:number;
    public tipo:string;
    public nick:string;
    public name:string;
    public sname:string;
    public email:string;
    public telefono:number;
    public acreditacion:string;
    public horario:string;
    public password:string;
    public img_even:string;

    constructor(id_eventos:number,anfitrion:number,titulo:string,localidad:string,direccion_even:string,descripcion_even:string,modalidad:number,terapia:string,fecha:string,img:string,
        id_user:number,tipo:string,nick:string,name:string,sname:string,email:string,telefono:number,acreditacion:string,
        horario:string,password:string,img_even:string){

    this.id_eventos = id_eventos;
    this.anfitrion = anfitrion;
    this.titulo = titulo;
    this.localidad = localidad;
    this.direccion_even = direccion_even;
    this.descripcion_even = descripcion_even;
    this.modalidad = modalidad;
    this.terapia = terapia;
    this.fecha = fecha;
    this.img = img;
    this.img_even=img_even
}
}