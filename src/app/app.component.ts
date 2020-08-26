import {Component} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fashi-angular-template';

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 500,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['NEXT', 'PREVIOUS'],
    nav: false,
    responsive: {
      0: {
        items: 1
      }
    }
  };

  womenOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 500,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['NEXT', 'PREVIOUS'],
    nav: false,
    autoHeight: false,
    autoWidth: false,
    items: 4,
    margin: 25
  };

  slides1 = [{
    id: '1',
    src: '/assets/img/hero-1.jpg',
    alt: '1',
    title: '1'
  }, {
    id: '2',
    src: '/assets/img/hero-2.jpg',
    alt: '2',
    title: '2'
  }];
}
