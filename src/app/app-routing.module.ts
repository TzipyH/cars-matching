import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import UserProfileComponent from './components/user-profile/user-profile.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';

const routes: Routes = [
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'dashboard', component: DashbordComponent },
  { path: '', redirectTo: '/userProfile', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
