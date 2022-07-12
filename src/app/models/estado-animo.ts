export class EstadoAnimo {

    public id_estado_animo:number;
    public id_user:number;
    public animo:number;
    public energia:number;
    public ansiedad:number;
    public date:number;

    constructor(animo:number, energia:number, ansiedad:number, date:number){
        this.id_estado_animo = 0;
        this.id_user = 0;
        this.animo = animo;
        this.energia = energia;
        this.date = date;
    }
}
