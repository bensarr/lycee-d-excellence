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
  private id?: string;
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
    this.routeParams =this.route.snapshot.paramMap;
    this.id = this.routeParams.get('id');
    if(this.id)
      this.loadOneStudent();
    else
      this.student = new Student();
    this.saveForm = this.fb.group({
      nom: [
        '',
        [Validators.required, Validators.minLength(2)],
      ],
      prenom: [
        '',
        [Validators.required, Validators.minLength(5)],
      ],
      classe: [
        null,
        [Validators.required]
      ]
    });
    this.loadClasses();
  }
  private loadClasses(){
    this.classeServices.getAll()
      .subscribe(
        data => {
          this.listCl = data;
        },
        error => {
          console.log(error);
        });
  }
  saveStudent(){
    this.student = Object.assign(this.saveForm!.value);
    this.studentServices.create(this.student!)
        .subscribe( data => {
              this.goBack();
            },
            error => console.log(error));
  }
  loadOneStudent(): void {
    this.studentServices.getById(this.id!)
        .subscribe(
            data => {
              this.student = data;
              this.saveForm!.get('nom')!.setValue(this.student!.nom);
              this.saveForm!.get('prenom')!.setValue(this.student!.prenom);
              this.saveForm!.get('classe')!.setValue(this.student!.classe!._id!);
            },
            error => {
              console.log(error);
            });
  }
  editStudent(){
    this.student = Object.assign(this.saveForm!.value);
    this.studentServices.update(this.id!, this.student!)
        .subscribe(
            response => {
              this.goBack();
            },
            error => {
              console.log(error);
            });
  }
  goBack(){
    this.location.back();
  }

}
