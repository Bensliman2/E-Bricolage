import { Component } from '@angular/core';
import { ModalController, NavController} from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.page.html',
  styleUrls: ['./registeruser.page.scss'],
})
export class RegisteruserPage {

  account: {  email: string, 
    password: string, first_name: string, last_name: string, sex: string,
    address: string, phone: string} = {
      email: '', 
      password: '', first_name: '', last_name: '', sex: '',
      address: '', phone: ''
    };
  constructor(public userservice : UserService, public router : Router, public modalController : ModalController, 
    public navCtrl: NavController,  public toastController: ToastController ) { }
  
  async registeruser() {
    const registerModal = await this.modalController.create({
      component: RegisteruserPage
    });
    return await registerModal.present();
  }


  async errorMessage() {
    const toast = await this.toastController.create({
      message: 'An error has aquired, please try again!',
      duration: 2000
    });
    toast.present();
  }

  async successMessage() {
    const toast = await this.toastController.create({
      message: 'You have signed up successfully.',
      duration: 2000
    });
    toast.present();
  }



  
  doSignup() {
    // Attempt to login in through our User service
    this.userservice.signup(this.account).subscribe((resp) => {
      this.successMessage();
      //this.router.navigate(['first']);
      this.modalController.dismiss();
      //this.navCtrl.push(FirstRunPage);
    });
  }
 
  /*
  , (err) => {
      this.errorMessage();
      this.router.navigate(['first']);
      // Unable to sign up     
    }
  */


   /* 
 setUser(data){
  return new Promise((resolve, reject) => {

     this.http.post(this.apiUrl+'/user', JSON.stringify(data), {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
    .subscribe(res => {
      resolve(res);
    }, (err) => {
      reject(err);
    });
*/

}
/*
 import { Component } from '@angular/core';
import { ModalController, NavController} from '@ionic/angular';
import { RegisteruserPage } from '../registeruser/registeruser.page';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.page.html',
  styleUrls: ['./userlogin.page.scss'],
})
export class UserloginPage  {
  account: {  email: string, 
    password: string, first_name: string, last_name: string, sex: string,
    address: string, phone: string} = {
      email: '', 
      password: '', first_name: '', last_name: '', sex: '',
      address: '', phone: ''
    };
  constructor(public modalController : ModalController, public user : UserService, public navCtrl: NavController) { }


  async registeruser() {
    const registerModal = await this.modalController.create({
      component: RegisteruserPage
    });
    return await registerModal.present();
  }
 

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(FirstRunPage);
    }, (err) => {
       this.navCtrl.push(FirstRunPage);
      // Unable to sign up
      
    });
  }
  welcomePage(){
    this.navCtrl.push('WelcomePage');
  }

}
 */

