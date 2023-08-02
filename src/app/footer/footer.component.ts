import { Component } from '@angular/core';
import { SocialmediaService } from '../socialmedia.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
constructor (public _sms: SocialmediaService){}
}
