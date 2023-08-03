import { Component, OnInit } from '@angular/core';
import { SocialmediaService } from '../socialmedia.service';

@Component({
  selector: 'app-follow-us',
  templateUrl: './follow-us.component.html',
  styleUrls: ['./follow-us.component.scss']
})
export class FollowUsComponent implements OnInit {
  constructor(public _sms:SocialmediaService){}
  socialMedia:any= [];
  images: string[] = ['beads_1.png','beads_2.png','beads_3.png','beads_4.png','beads_5.png',];
currentImage:number = 1;
image:string ='beads_1.png';

ngOnInit(): void {
  this.socialMedia = this._sms.socialMedia;
  this.deleteMailOnSocialMediaArray();
  this.changeImage();
}
deleteMailOnSocialMediaArray(){
let index = this.socialMedia.findIndex((obj: { icon: string; }) =>obj.icon == 'mail.png');
this.socialMedia.splice(index,1);
}
changeImage(){
  setInterval(() => {this.count();}, 5000)
}
count(){
  // if(this.c)
  this.currentImage = this.currentImage+1;
  console.log(this.currentImage)
  this.image = this.images[this.currentImage];
}

}
