import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Classe } from 'src/app/models/classe';
import { Student } from 'src/app/models/student';
import { ClassesService } from 'src/app/services/classes/classes.service';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  private id?:number;
  public saveForm!: FormGroup;
  public student!: Student;
  public listCl!: Classe[];
  private routeParams: any;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private classeServices: ClassesService,
    private studentServices: StudentsService,
    ) { }

  ngOnInit(): void {
    // this.routeParams =this.route.snapshot.paramMap;
    // this.id = Number(this.routeParams.get('id'));
    // if(this.id > 0)
    //   this.student = students.find((e) => e.id === this.id);
    // else
    //   this.student = new Student();
    this.saveForm = this.fb.group({
      id: [
        this.student.id
      ],
      nom: [
        this.student.nom,
        [Validators.required, Validators.minLength(2)],
      ],
      prenom: [
        this.student.prenom,
        [Validators.required, Validators.minLength(5)],
      ],
      classe: [
        this.student.classe?.id,
        [Validators.required]
      ]
    });
  }
  private loadClasses(){
    this.classeServices.getAll()
      .subscribe(
        data => {
          this.listCl = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  saveStudent(){
    // const index = students.length - 1;
    // const id = students[index].id + 1;
    // this.saveForm.get('id')?.patchValue(id);
    // this.student = Object.assign(this.student, this.saveForm.value);
    // // this.student.classe = Object.assign(this.student.classe, this.listCl.find((c)=> c.id === Number(this.saveForm.get('classe')?.value)));
    // students.push(this.student);
    this.goBack();
  }
  editStudent(studentId:string){
    // const index = students.findIndex((e) => e.id === studentId);
    // students[index] = Object.assign(students[index], this.saveForm.value);
    // students[index].classe = Object.assign(students[index].classe, this.listCl.find((c)=> c.id === Number(this.saveForm.get('classe')?.value)));
    this.goBack();
  }
  goBack(){
    this.location.back();
  }

}
