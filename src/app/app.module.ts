import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { ClassesComponent } from './components/classes/classes.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { StudentsComponent } from './components/students/students.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CreateClasseComponent } from './components/classes/create-classe/create-classe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { CreateStudentComponent } from './components/students/create-student/create-student.component';
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
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
