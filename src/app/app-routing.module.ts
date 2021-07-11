import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MainpagecomponentComponent } from './mainpagecomponent/mainpagecomponent.component';

const routes: Routes = [
  { path: '', 
  redirectTo:'/home',
  pathMatch:'full',
},
{ path: 'login', component: LoginComponent,

},

 
  { path: 'home', component: MainpageComponent,
  children:[
    // {
    //   path:'',loadChildren:'./mainpagecomponent/mainpagecomponent.component'
      
    // },
    {
      path: 'mainpage', component: MainpagecomponentComponent 
    }
  ]
 },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
