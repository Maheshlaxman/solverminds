import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mainpagecomponent',
  templateUrl: './mainpagecomponent.component.html',
  styleUrls: ['./mainpagecomponent.component.scss']
})
export class MainpagecomponentComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  username:any;
  password:any;
  loginfun(){
    var loginvalue={
      "username":this.username,
      "password":this.password
      
      
    }
    console.log(loginvalue);

  }
}
