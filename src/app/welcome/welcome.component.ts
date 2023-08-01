import { Component } from '@angular/core';
import { ShopUrlService } from '../shop-url.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  constructor(public sus: ShopUrlService) {

  }
}
