import { Component } from '@angular/core';
import { SocialmediaService } from '../socialmedia.service';
import { ShopUrlService } from '../shop-url.service';

@Component({
  selector: 'app-lnk',
  templateUrl: './lnk.component.html',
  styleUrls: ['./lnk.component.scss']
})
export class LnkComponent {
  constructor(public _sms: SocialmediaService, public _sus: ShopUrlService) {}

links = [{
  title: 'Unsere Wasserperlen im Tiktok Shop!',
  url:  this._sus.tiktokshopLink,
  pic: 'dekoh_02.jpg'
},{
  title: 'DekOh! Website',
  url: 'https://dekoh.de',
  pic: 'logo_dekoh.jpg'
}, {
  title: 'Impressum',
  url: 'https://dekoh.de/#/imprint'

}, {
  title: 'Datenschutzerklärung',
url: 'https://dekoh.de/#/privacy',}
  
];

}
