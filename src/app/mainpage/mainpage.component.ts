import { Component, Input, OnInit ,TemplateRef,ViewChild } from '@angular/core';
import {LoginComponent} from './../login/login.component';
import {BsModalRef,BsModalService} from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { DxDataGridModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  data:string = "Message from parent";
  modalRef:BsModalRef;
  base64textString: string;
  constructor(private modalservice:BsModalService,private httpClient: HttpClient) { }
  showFiller = false;
  dataSource:any=[]
  valueuser:any
  ngOnInit () {
    this.sendGetRequest().subscribe((data)=>{
      console.log(data);
      this.dataSource=data
      this.valueuser=data[0]
        })
   }
   sendGetRequest(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }
 
  selectedfunctio(value){
    console.log(value);
  this.valueuser=value
  }
  countChangedHandler(event){
    console.log("test",event)
    this.sendGetRequest()
    this.dataSource=event
    console.log("test1",this.dataSource)
  }
   

}
