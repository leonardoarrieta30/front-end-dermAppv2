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
import { ProfileDermatologistComponent } from './profiles/dermatologist/profile-dermatologist/profile-dermatologist.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { ListPatientsComponent } from './overview/pages/dermatologist/list-patients/list-patients.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ReactiveFormsModule} from "@angular/forms";
import { EditProfileDermatologistComponent } from './profiles/dermatologist/edit-profile-dermatologist/edit-profile-dermatologist.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { InfoPatientSpecificComponent } from './overview/pages/dermatologist/info-patient-specific/info-patient-specific.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ViewComponent,
    WhoStartComponent,
    ViewDermatologistComponent,
    NavbarDermatologistComponent,
    ProfileDermatologistComponent,
    ListPatientsComponent,
    EditProfileDermatologistComponent,
    InfoPatientSpecificComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
