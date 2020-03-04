import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';
import { timer, pipe } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('opacityChange', [
      state('fadeOut', style({ opacity: 0 })),
      state('fadeIn', style({ opacity: 1 })),
      transition('fadeIn => fadeOut', [animate('0.15s')]),
      transition('fadeOut => fadeIn', [animate('0.15s')])
    ])
  ]
})
export class LandingPageComponent implements OnInit {
  fadeOut = false;
  carouselSrc = './assets/images/showcase-1.jpg';
  carouselImage = 1;
  constructor() {}

  ngOnInit() {
    const autoCarousel = timer(1000, 4000);
    autoCarousel.subscribe(res => {
      this.carouselImage++;
      if (this.carouselImage === 7) {
        this.carouselImage = 1;
      }

      if (this.carouselImage === 1) {
        this.carouselChange('./assets/images/showcase-1.jpg', 1);
      } else if (this.carouselImage === 2) {
        this.carouselChange('./assets/images/showcase-2.jpg', 2);
      } else if (this.carouselImage === 3) {
        this.carouselChange('./assets/images/showcase-3.jpg', 3);
      } else if (this.carouselImage === 4) {
        this.carouselChange('./assets/images/showcase-4.jpg', 4);
      } else if (this.carouselImage === 5) {
        this.carouselChange('./assets/images/showcase-5.jpg', 5);
      } else if (this.carouselImage === 6) {
        this.carouselChange('./assets/images/showcase-6.jpg', 6);
      }
    });
  }

  changeCarouselImage(location: string, image: number) {
    if (this.carouselImage === image) {
      return;
    }
    this.carouselImage = image;
    this.carouselChange(location, image);
  }

  carouselChange(location: string, image: number) {
    this.fadeOut = !this.fadeOut;
    const source = timer(100, 150);
    source.pipe(take(1)).subscribe(res => {
      // console.log('0.5 SECONDS HAVE PASSED');
      this.fadeOut = !this.fadeOut;
      this.carouselSrc = location;
    });
  }
}
