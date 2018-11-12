import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../shared/services/product-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../shared/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private ps: ProductServiceService,
    private router: ActivatedRoute
  ) { }
    id;
    product: Product;
  ngOnInit() {
    this.id= this.router.snapshot.paramMap.get('id');
    this.ps.getProduct(this.id)
    .subscribe((res)=>{
      this.product = res;
      },
      (error) => {
      console.log("failt to request data", error);
    })
   
  }

}
