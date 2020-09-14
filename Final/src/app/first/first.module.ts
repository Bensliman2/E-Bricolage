import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirstPage } from './first.page';
import { UserloginPage } from '../userlogin/userlogin.page';
import { SpecloginPage } from '../speclogin/speclogin.page';
import { RegisteruserPage } from '../registeruser/registeruser.page';
import { RegisterspecPage } from '../registerspec/registerspec.page';

const routes: Routes = [
  {
    path: '',
    component: FirstPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirstPage, UserloginPage, SpecloginPage,RegisteruserPage, RegisterspecPage],
  entryComponents: [UserloginPage, SpecloginPage,RegisteruserPage,RegisterspecPage]
})
export class FirstPageModule {}
