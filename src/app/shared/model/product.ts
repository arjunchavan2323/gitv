




export interface Iproduct{
     pName: string;
    Pdetail: string;
    pStatus: Ienumproduct;
    pId:string
}


export enum Ienumproduct{
    Inprogress='Inprogress',
    Dispatch='Dispatch',
    Delivered='Delivered'
}


export interface Ires <T>{
    msg:string;
    data:T
}