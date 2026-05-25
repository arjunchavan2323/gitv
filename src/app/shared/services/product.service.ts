import { Injectable } from '@angular/core';
import { Ienumproduct, Iproduct, Ires } from '../model/product';
import { Observable, of } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _snackbar : SnackbarService) { }


  productArr:Array<Iproduct>=[
    {
      pName:'Samsung M31',
      Pdetail:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quas.',
      pStatus:Ienumproduct.Inprogress,
      pId:'123'
    },
     {
      pName:'Iphone 16',
      Pdetail:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quas.',
      pStatus:Ienumproduct.Dispatch,
      pId:'1235'
    },

     {
      pName:'One plus',
      Pdetail:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quas.',
      pStatus:Ienumproduct.Delivered,
      pId:'126663'
    },
  ];


  fetchproduct():Observable<Iproduct[]>{
    return of(this.productArr)
  }


  createAddproduct(product:Iproduct):Observable <Ires<Iproduct>> {
      this.productArr.push(product)
     return of({
      msg:`Product Is Added successfully ${product.pName}`,
      data:product
     })
  }


  updateproductstatus(productid:string, productstatus:Ienumproduct){
     this.productArr.forEach(obj => {
      if(obj.pId===productid){
        obj.pStatus=productstatus
      }
     })
    this._snackbar.opensnackbar(`Product Added successfully ${productstatus}`)
  }
 


}
