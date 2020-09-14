import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Specialistprofial2Page } from './specialistprofial2.page';

const routes: Routes = [
  {
    path: '',
    component: Specialistprofial2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Specialistprofial2Page]
})
export class Specialistprofial2PageModule {}
