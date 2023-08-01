import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopUrlService {

  constructor() { }
  
  navigateTo(url: string){
    if(url=='amz'){
      window.open('https://www.amazon.de/DekOh-Wasserperlen-Gelperlen-Dekoration-wiederverwendbar/dp/B0C5RHXD8W/ref=sr_1_23?crid=E1C2FN7R7E54&keywords=wasserperlen+f%C3%BCr+pflanzen&qid=1690894707&sprefix=wasserperlen%2Caps%2C113&sr=8-23');
    }
  }
}
