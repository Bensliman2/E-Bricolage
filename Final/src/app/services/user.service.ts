import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';

import { Storage } from '@ionic/storage';

@Injectable()
export class UserService {
  _user: any;
  auser : any;
 /*
     this._user = resp.user;
    this.storage.set('id',this._user.id)
    this.storage.set('email', this._user.email)
    this.storage.set('first_name',this._user.first_name)
    this.storage.set('last_name',this._user.last_name)
    this.storage.set('sex',this._user.sex)
    this.storage.set('address',this._user.id)
    this.storage.set('phone',this._user.id)
 */

  setUser(data):void{
    this._user=data
  }
  getUser():any{
    return this._user;
  }
  loggedin: boolean;
   constructor(public api: ApiService, public storage : Storage) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo);

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
        this.loggedin=true;

      } else {
        this.loggedin=false;  
      }
    });

    /*
    , err => {
      console.error('ERROR', err);
    }
    */
    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    
    let seq = this.api.post('user/signup', accountInfo);

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
        
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }


  setCommande(commandInfo: any){
    let seq = this.api.post('project', commandInfo);
    seq.subscribe((res: any) => {
     
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  /*
  getUsers() {
    let seq = this.api.get('user/'+this._user.id);
        this.http.get(this.apiUrl + '/specialists').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
*/






  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**

   * 
   * 
   */
  _loggedIn(resp) {
    this._user = resp.user;
    console.log(this._user[0])

    this.storage.set('user', this._user[0])
    /*
    this.storage.set('id',this._user.id)
    this.storage.set('first_name',this._user.first_name)
    this.storage.set('last_name',this._user.last_name)
    this.storage.set('sex',this._user.sex)
    this.storage.set('address',this._user.id)
    this.storage.set('phone',this._user.id)
    */
    
    
    this.storage.get('user').then((val)=>{
      this.auser=val;
      console.log(val)
    });


    console.log("this.auser")
    console.log(this.auser)
    
  }

  isLoggedIn() {
    if (this._user!==null) return false;
    else return true;  
  }

  /*
  profile_update(){
    var profileDetails = [
      {
        full_name: "Sibabrat Swain",
        about: "I am working in NTT . ",
        profile_image: "asset/img/src/img.jpg",

        followers: 230,
        following: 170,

        user_name: "sibabratswain",
        password: 'July 8, 1954',
        email: 'sibabrat.swain@constacloud.net',
        state: 'Odisha',
      },
    ];
    return profileDetails;
  }
  */
}

