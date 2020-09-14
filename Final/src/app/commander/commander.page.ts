import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.page.html',
  styleUrls: ['./commander.page.scss'],
})
export class CommanderPage implements OnInit {
  command : { boss : string, type:  string,  details:  string, due_date:  string, status:  string
   } = { boss : '', type: '',  details: '', due_date: '', status: ''}
  myId: any;
  constructor(public userservice : UserService, public storage : Storage ,  private activatedRoute: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
    console.log(this.myId);
  }

  
setCommande() {
  
  this.storage.get('id').then((val)=>{
    this.command.boss=val;
    console.log("id is "+val)
  });
  this.command.type=this.myId
  this.command.status='request'
 console.log(this.command);
  // Attempt to login in through our User service
  this.userservice.setCommande(this.command).subscribe((resp) => {
   
    //this.navCtrl.push(FirstRunPage);
  });
}

}


/*


@Component({
  selector: 'app-commander',
  templateUrl: './commander.page.html',
  styleUrls: ['./commander.page.scss'],
})
export class CommanderPage implements OnInit {
myId: any;
// address: '', location: '', specialist: '',
 command = { boss : '', type: '',  details: '', due_date: '', status: ''}

/*
 account: {  email: string, 
  password: string, first_name: string, last_name: string, sex: string,
  address: string, phone: string} = {
    email: '', 
    password: '', first_name: '', last_name: '', sex: '',
    address: '', phone: ''
  };

constructor(private router: Router,  private activatedRoute: ActivatedRoute, public userservice : UserService,  public modalController : ModalController, 
  public navCtrl: NavController,  public toastController: ToastController, public storage : Storage ) { }

ngOnInit() {
  this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
  console.log(this.myId);
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




setCommande() {
  this.command.boss=this.storage.get('id');
  this.command.type=this.myId
  this.command.status='request'

  // Attempt to login in through our User service
  this.userservice.setCommande(this.command).subscribe((resp) => {
    this.successMessage();
    //this.router.navigate(['first']);
    this.modalController.dismiss();
    //this.navCtrl.push(FirstRunPage);
  });
}

}




*/