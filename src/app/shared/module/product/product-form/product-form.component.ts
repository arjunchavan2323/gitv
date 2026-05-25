import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ienumproduct, Iproduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
@ViewChild('productForm') productForm!:NgForm
  constructor(private _productservice :ProductService,
    private _snackbar :SnackbarService
  ) { }

  ngOnInit(): void {
  }


  onsubmit(){
   if(this.productForm.valid){
    let new_product:Iproduct={
      ...this.productForm.value,
      pId:Date.now().toString(),
      pStatus:Ienumproduct.Inprogress

    }
    
this._productservice.createAddproduct(new_product)
.subscribe({
  next:res => {
  
    this.productForm.reset()
    this._snackbar.opensnackbar(res.msg)
  },
  error:err => {
    
    this._snackbar.opensnackbar(err.msg)
    
  }
})
   }
  }

}
