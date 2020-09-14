import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserloginPage } from '../userlogin/userlogin.page';
import { SpecloginPage } from '../speclogin/speclogin.page';
@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage  {
 

  constructor(public modalController: ModalController ) { }

  async user() {
    const userModal = await this.modalController.create({
      component: UserloginPage
    });
    return await userModal.present();
  }

  async specialist() {
    const specModal = await this.modalController.create({
      component: SpecloginPage
    });
    return await specModal.present();
  }
}
