import { Component, Input, OnInit } from '@angular/core';
import { Ienumproduct, Iproduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
@Input()product!:Iproduct
  Allstoreenum= Ienumproduct 
  constructor(private _productservice : ProductService
    
  ) { }

  ngOnInit(): void {
  }

  onpstatuschange(productid:string, productstatus:Ienumproduct){
    this._productservice.updateproductstatus(productid, productstatus)

   
  }


  

}
