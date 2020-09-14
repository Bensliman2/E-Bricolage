import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterspecPage } from '../registerspec/registerspec.page';

@Component({
  selector: 'app-speclogin',
  templateUrl: './speclogin.page.html',
  styleUrls: ['./speclogin.page.scss'],
})
export class SpecloginPage {

  constructor(public modalController : ModalController) { }

  async registerspec() {
    const specModal = await this.modalController.create({
      component: RegisterspecPage
    });
    return await specModal.present();
  }

}
