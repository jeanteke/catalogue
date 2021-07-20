import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  facebookIcon = 'assets/icons/facebook.svg';
  twitterIcon = 'assets/icons/twitter.svg';
  instagramIcon = 'assets/icons/instagram.svg';
  youtubeIcon = 'assets/icons/youtube.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
