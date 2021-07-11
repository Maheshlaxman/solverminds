
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  constructor(private router: Router) { }

  ngOnInit() {
    
  }


  
 
  data:any;
  uname:any;
  usernameerror:any;
  psw:any;
  passwoerror:any;
 valueuser:string;

  login(valueuser){
    var uservalue="admin@gmail.com";
    var passwovalue="admin@123"
    if(this.uname==uservalue){
      if(this.psw==passwovalue){
        this.valueuser = 'logggggg'
        console.log("loginsuccess")
        this.router.navigateByUrl('/home');
      }
      else{
       
        this.passwoerror="please enter valid password"

      }

    }
    else{
      this.usernameerror="please enter valid username"
      console.log(this.usernameerror)
    }
  }
  
  


 
  
}