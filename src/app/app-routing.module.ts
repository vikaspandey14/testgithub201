import { NgModule } from '@angular/core';
import { RouterModule,Routes  } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TextcompareComponent} from './textcompare/textcompare.component';



export const routes: Routes = [
{ path :'',component:TextcompareComponent},
{ path :'home',component:HomeComponent },
{ path: 'textcompare', component: TextcompareComponent },
  // otherwise redirect to home
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
