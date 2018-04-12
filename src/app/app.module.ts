import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SearchComponent} from './search/search.component';
import {LoginComponent} from './login/login.component';
import {IfaceComponent} from './iface/iface.component';
import {ApproverComponent} from './approver/approver.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    IfaceComponent,
    ApproverComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
