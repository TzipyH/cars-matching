import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import UserProfileComponent from './components/user-profile/user-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/userProfile', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
