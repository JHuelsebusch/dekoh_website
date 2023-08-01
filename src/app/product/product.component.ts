import { Component } from '@angular/core';
import { ShopUrlService } from '../shop-url.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(public sus:ShopUrlService) {}

}
