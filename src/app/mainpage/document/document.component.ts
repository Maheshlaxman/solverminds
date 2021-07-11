import { Component,Input, OnInit,  Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  @Input() valueuser:any;
  @Output() countChanged: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }
  dataSource:any;
  ngOnInit() {
    this.sendGetRequest().subscribe((data)=>{
      console.log(data);
      this.dataSource=data
      this.valueuser=data[0]
        })
   }
   sendGetRequest(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }

  demo(){
    setTimeout(() => {
      console.log("document",this.valueuser);

    }, 1000);

  }
  image:any;
  onselectfile(event){
    console.log("event",event)
    if(event.target.files && event.target.files[0]){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (events:any)=> {
       // var filetype =event.target.files[0].type;
       
       this.image=events.currentTarget.result
       // console.log("aft",this.image)
        this.setimage()
      }
     
    }
    
    

  }
  setimage(){
    this.dataSource.forEach(element => {
      if(element.id == this.valueuser.id){
        element.imagepath=this.image
      }
      
    });
    console.log('imagepath',this.dataSource)
    this.countChanged.emit(this.dataSource) 
  }
}
