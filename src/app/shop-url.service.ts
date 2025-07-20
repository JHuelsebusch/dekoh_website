import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopUrlService {

  constructor() { }
  
  amzLink: string = 'https://www.amazon.de/DekOh-Wasserperlen-Gelperlen-Dekoration-wiederverwendbar/dp/B0C5RHXD8W/ref=sr_1_16?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GLG76FVUPXAB&keywords=wasserperlen+deko&qid=1691416473&sprefix=wasserperlen+deko%2Caps%2C111&sr=8-16'
  tiktokshopLink : string = 'https://shop.tiktok.com/view/product/1729517097748240997?region=DE&locale=de-DE&source=seller_center&no-cache=1&e=1';

  navigateTo(url: string){
    if(url=='amz'){
      window.open(this.amzLink);
    }
    if(url=='tts'){
      window.open(this.tiktokshopLink);
    }
  }
}
