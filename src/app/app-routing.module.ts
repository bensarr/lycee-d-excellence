import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { CreateClasseComponent } from './classes/create-classe/create-classe.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: 'students', component: StudentsComponent},
  {path: 'students/create', component: CreateStudentComponent},
  {path: 'students/edit/:id', component: CreateStudentComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'classes/create', component: CreateClasseComponent},
  {path: 'classes/edit/:id', component: CreateClasseComponent},
  {path: 'home', component: HomeContentComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
