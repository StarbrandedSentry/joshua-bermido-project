import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  carouselSrc = './assets/images/showcase-1.jpg';
  constructor() {}

  ngOnInit() {}

  changeCarouselImage(location: string) {
    this.carouselSrc = location;
  }
}
