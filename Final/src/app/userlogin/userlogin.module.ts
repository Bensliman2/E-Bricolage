import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserloginPage } from './userlogin.page';
import { RegisteruserPage } from '../registeruser/registeruser.page';

const routes: Routes = [
  {
    path: '',
    component: UserloginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserloginPage, RegisteruserPage],
  entryComponents: [RegisteruserPage]
})
export class UserloginPageModule {}
