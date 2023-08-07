import { Component } from '@angular/core';
import { SocialmediaService } from '../socialmedia.service';

@Component({
  selector: 'app-lnk',
  templateUrl: './lnk.component.html',
  styleUrls: ['./lnk.component.scss']
})
export class LnkComponent {
  constructor(public _sms: SocialmediaService) {}

links = [{
  title: 'Unsere Wasserperlen bei Amazon.de',
  url: 'https://www.amazon.de/DekOh-Wasserperlen-Gelperlen-Dekoration-wiederverwendbar/dp/B0C5RHXD8W/ref=sr_1_23?crid=E1C2FN7R7E54&keywords=wasserperlen+f%C3%BCr+pflanzen&qid=1690894707&sprefix=wasserperlen%2Caps%2C113&sr=8-23',
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
