import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { TwowayComponent } from './twoway/twoway.component';
import {FormsModule} from '@angular/forms';
import { ProerybindComponent } from './proerybind/proerybind.component'
import {RouterModule} from '@angular/router'
import {AboutusComponent} from '..//app/aboutus/aboutus.component'
import {ContactusComponent} from '..//app/contactus/contactus.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TwowayComponent,
    ProerybindComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
