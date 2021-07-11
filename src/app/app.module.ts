import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MainpagecomponentComponent } from './mainpagecomponent/mainpagecomponent.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DocumentComponent } from './mainpage/document/document.component';
import { HttpClientModule} from '@angular/common/http';
import { DxDataGridModule , DxTemplateModule ,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxTextAreaModule,
  DxTagBoxModule,
  DxDateBoxModule,
  DxButtonModule,
  DxValidatorModule} from 'devextreme-angular';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpagecomponentComponent,
    MainpageComponent,
    DocumentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    DxDataGridModule,
    DxTemplateModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxTagBoxModule,
    DxDateBoxModule,
    DxButtonModule,
    DxValidatorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
