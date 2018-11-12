import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../shared/services/product-service.service';
import { Product } from '../shared/model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private ps: ProductServiceService
  ) { }
  products: Product[] = [];
  rating: number;
  name: string;
  category: string;



  ngOnInit() {
    this.ps.getProducts()
    .subscribe((res) => {
      this.products = res;
    },
    (error)=>{
      console.log("failed to request data",error);
    }
    );
  }

}
