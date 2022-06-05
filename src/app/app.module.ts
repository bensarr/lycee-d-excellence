import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { ClassesComponent } from './classes/classes.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { StudentsComponent } from './students/students.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CreateClasseComponent } from './classes/create-classe/create-classe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    ClassesComponent,
    HomeContentComponent,
    StudentsComponent,
    CreateClasseComponent,
    NotFoundComponent,
    ModalDeleteComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
