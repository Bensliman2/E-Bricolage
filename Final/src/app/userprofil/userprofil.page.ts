import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-userprofil',
  templateUrl: './userprofil.page.html',
  styleUrls: ['./userprofil.page.scss'],
})
export class UserprofilPage {
  userInfo : any;
  // { address: string , email: string, first_name: string,  id: string, last_name: string, phone: string, sex: string };
 /*
 address: "ATLAS MARJAN1, MEKNES"
created_at: "2019-05-26 18:29:36"
email: "elhassane@mail.com"
email_verified_at: null
first_name: "EL HASSANE"
id: 2
last_name: "EL KTIBI"
location: 15467978
phone: "0636975032"
remember_token: null
sex: "M"
updated_at: "2019-05-26 18:29:36"
 */
id : any; email: any; first_name: any; last_name: any; sex: any; address: any; phone: any;

  constructor(public userservice : UserService, public storage : Storage) { 

    this.getUserInfo();
  }

  
  getUserInfo(){
    
    this.storage.get('email').then((val)=>{
      this.email=val;
      });
    this.id= this.storage.get('id')
    //this.email=this.storage.get('email')
    this.first_name=this.storage.get('first_name')
    this.last_name=this.storage.get('last_name')
    this.sex=this.storage.get('sex')
    this.address=this.storage.get('address')
    this.phone=this.storage.get('phone')

    console.log("this.storage.get('user')")
    console.log(this.storage.get('user'))
    console.log("this.userInfo")
    console.log(this.userInfo)
  }
 

}
