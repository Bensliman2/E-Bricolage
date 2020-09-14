import { Component, OnInit } from '@angular/core';
import { SpecialService } from '../special.service';
import { Router } from '@angular/router';
// import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-special',
  templateUrl: './special.page.html',
  styleUrls: ['./special.page.scss'],
})
export class SpecialPage implements OnInit {
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

  constructor(private specialService: SpecialService, private router: Router, /*private toastctrl:ToastController*/) { }
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

  ngOnInit() {
    this.specialService.getData('top-headLines?country=us&category=business')
    .subscribe(data => {
      console.log(data);
      this.data = data;
     } );
  }

  onGoToNewSinglePage(special) {
    this.specialService.currentSpeciality = special;
    this.router.navigate(['/jardinagelist']);
  }

  faireunedemande(special) {
    this.specialService.currentSpeciality = special;
    this.router.navigate(['/login']);
  }

 /* slidechanged() {
    this.toastctrl.create({
      message: 'Slide has been Changed!'
    });

  }*/
}
