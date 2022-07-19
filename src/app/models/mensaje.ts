export class Mensaje {
public id_emisor:number;
public id_receptor:number;
public contenido:string;

constructor(id_emisor:number, id_receptor:number ,contenido:string){
    this.id_emisor=id_emisor;
    this.id_receptor=id_receptor;
    this.contenido=contenido;
}
}
