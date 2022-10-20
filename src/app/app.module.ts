import {NgModule} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public/pages/home/home.component';
import { NavbarComponent } from './public/pages/navbar/navbar.component';
import { ViewComponent } from './public/pages/view/view.component';
import { WhoStartComponent } from './public/pages/who-start/who-start.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ViewDermatologistComponent } from './overview/pages/dermatologist/view-dermatologist/view-dermatologist.component';
import { NavbarDermatologistComponent } from './overview/pages/dermatologist/navbar-dermatologist/navbar-dermatologist.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ViewComponent,
    WhoStartComponent,
    ViewDermatologistComponent,
    NavbarDermatologistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
