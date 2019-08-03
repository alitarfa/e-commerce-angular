import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


// import route module
import {RouterModule, Routes} from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component'
import { MDBBootstrapModule } from 'angular-bootstrap-md';


/**
 * define the routes of this web application
 */
 const appRoute = [
   {path : '' , component: MainComponent},
   {path : "signin" , component: SignInComponent},
   {path : 'home', component : HomeComponent}
 ]



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    MainComponent,
    ProductItemComponent,
    ShopListComponent,
    ProfileComponent,
    NotificationListComponent,
    NavBarComponent,
    HomeComponent,
    
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoute,{ enableTracing: false } ),
    BrowserModule,
    NgbModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatListModule,
    MatBadgeModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
