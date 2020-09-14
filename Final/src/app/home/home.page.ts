import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pages = [
    {
      title: 'Main',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'Cool Frameworks',
      children: [
        {
          title: 'Services',
          url: '/services',
          icon: 'logo-ionic'
        },
        {
          title: 'Register',
          url: '/login',
          icon: 'logo-google'
        },
      ]
    }
  ];

  data: any;
  special: any;

  constructor(private router: Router, /*private toastctrl:ToastController*/) { }
  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
       };
  slider = [
    {
      title: 'Retrouver les Meilleurs',
      description: 'Home Cleaners',
      image: 'assets/img/shutterstock.jpg'
    },
    {
      title: 'Retrouver les Meilleurs',
      description: 'Electriciens',
      image: 'assets/img/articles_images_list.jpeg'
    },
    {
      title: 'Retrouver les Meilleurs',
      description: 'Home Service pro',
      image: 'assets/img/meuble-repeint.jpg'
    }

  ];



}
