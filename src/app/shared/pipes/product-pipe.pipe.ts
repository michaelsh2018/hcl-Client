import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'productPipe'
})
export class ProductPipePipe implements PipeTransform {

  transform(products: Product[], descrition, name, rating, category): any {
    return products ? products.filter(product => name ? product.name === name:true)
    .filter(product => product.rating >= rating)
    .filter(product => category? product.category === category : true ) : products;
  }

}
