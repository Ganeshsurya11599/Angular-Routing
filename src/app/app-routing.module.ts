import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes =[
{path:'home', component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'welcome', component:WelcomeComponent},
{path:'', redirectTo:'/home', pathMatch:'full'}

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
