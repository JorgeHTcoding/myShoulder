export class Eventos {

    public id_eventos: number
    public anfitrion: number
    public titulo: string
    public localidad: string
    public direccion_even: string
    public descripcion_even: string
    public modalidad: string
    public terapia: string
    public fecha: string
    public img_even: string

    // constructor(id_eventos: number, anfitrion: number, titulo: string, localidad: string, direccion: string, descripcion: string, modalidad: string, terapia: string, fecha: string, img: string){
    
    constructor(id_eventos: number,anfitrion: number, titulo: string, localidad: string, direccion_even: string, descripcion_even: string, modalidad: string, terapia: string, fecha: string, img_even: string){
        this.id_eventos      = id_eventos;
        this.anfitrion       = anfitrion;
        this.titulo          = titulo;
        this.localidad       = localidad;
        this.direccion_even  = direccion_even;
        this.descripcion_even= descripcion_even;
        this.modalidad       = modalidad;
        this.terapia         = terapia;
        this.fecha           = fecha;
        this.img_even        = img_even;
    }
}
