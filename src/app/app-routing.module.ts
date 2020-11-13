import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InviteComponent } from './invite/invite.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'invite', component: InviteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
