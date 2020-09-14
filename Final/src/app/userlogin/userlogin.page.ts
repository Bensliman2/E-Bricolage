import { Component } from '@angular/core';
import { ModalController, NavController, ToastController} from '@ionic/angular';
import { RegisteruserPage } from '../registeruser/registeruser.page';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.page.html',
  styleUrls: ['./userlogin.page.scss'],
})
export class UserloginPage  {
 
  account: { email: string , password: string} = {
    email: '',
    password: ''
  };
    //public modalController : ModalController, public user : UserService, public navCtrl: NavController
  constructor(public modalController : ModalController, public userservice : UserService, public router : Router,
    public navCtrl: NavController,  public toastController: ToastController) { }


  async registeruser() {
    const registerModal = await this.modalController.create({
      component: RegisteruserPage
    });
    return await registerModal.present();
  }
 

  async errorMessage() {
    const toast = await this.toastController.create({
      message: 'error, try again!',
      duration: 2000
    });
    toast.present();
  }

  async successMessage() {
    const toast = await this.toastController.create({
      message: 'You have signed in successfully.',
      duration: 2000
    });
    toast.present();
  }


 
  signIn(){
     console.log(this.account)
        this.userservice.login(this.account).subscribe((resp) => {
         if(this.userservice.loggedin){
          console.log(resp)
          this.userservice.setUser(resp);
          this.successMessage()
          this.modalController.dismiss()
          this.router.navigate(['home']);
         }else {
          this.errorMessage()
         }
        }, (err) => {
          //this.navCtrl.setRoot(UsersPage);
         
      });
    }
    
  
}






 



