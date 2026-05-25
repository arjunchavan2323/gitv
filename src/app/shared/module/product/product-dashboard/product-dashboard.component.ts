import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
productInfo:Array<Iproduct>=[]
  constructor(private _productservice :ProductService) { }

  ngOnInit(): void {
    this._productservice.fetchproduct()
    .subscribe({
      next:res=> {
        this.productInfo=res
      },
      error:err => {
        console.log(err);
        
      }
    })
  }

}
