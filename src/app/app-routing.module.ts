import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { IfaceComponent } from './iface/iface.component';
import { ApproverComponent } from './approver/approver.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'iface', component: IfaceComponent },
  { path: 'approver', component: ApproverComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
