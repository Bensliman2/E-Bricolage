import { Injectable } from '@angular/core';
import { ApiService } from './services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserhandllerService {

  _user: any;
  loggedin: boolean;
   constructor(public api: ApiService) { }
  
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
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('user', accountInfo);

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

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
    console.log(resp.user);
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
