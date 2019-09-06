import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../environments/environment';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { AdminService } from './admin.service';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import { RecaptchaModule } from 'angular-google-recaptcha';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TagInputModule } from 'ngx-chips';
import { ProjectComponent } from './project/project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { TechnologyComponent } from './technology/technology.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProjectComponent,
    AddProjectComponent,
    TechnologyComponent,
    CatagoryComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FilterPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CKEditorModule,
    RecaptchaV3Module,
    TagInputModule,
    ToastrModule.forRoot({
      timeOut: 1000,
    }),
  ],
  providers: [
    LoginService,
    AuthGuard,
    AdminService,
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LcAI6oUAAAAALqjsor9utaRxiS1zUogONtcoqIK' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
