import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialmediaService {

  constructor() { }
  socialMedia = [{
    icon: 'insta.png',
    link: 'https://www.instagram.com/dekoh.de/'
  },{
    icon: 'fb.png',
    link: 'https://www.facebook.com/profile.php?id=100095104699877'
  },{
    icon: 'mail.png',
    link: 'mailto:mail@dekoh.de'
  }]
}
