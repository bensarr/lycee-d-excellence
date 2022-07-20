import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Classe } from 'src/app/models/classe';
import { ClassesService } from 'src/app/services/classes/classes.service';

@Component({
  selector: 'app-create-classe',
  templateUrl: './create-classe.component.html',
  styleUrls: ['./create-classe.component.scss']
})
export class CreateClasseComponent implements OnInit {
  private id?:string;
  public saveForm?: FormGroup;
  public classe?: Classe;
  private routeParams: any;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private classeService: ClassesService
    ) { }

  ngOnInit(): void {
    this.routeParams =this.route.snapshot.paramMap;
    this.id = this.routeParams.get('id');
    if(this.id)
      this.loadOneClasse();
    else
      this.classe = new Classe();
    this.saveForm = this.fb.group({
      libelle: [
        '',
        [Validators.required, Validators.minLength(5)],
      ],
    });
  }
  saveClasse(){
    this.classe = Object.assign(this.saveForm!.value);
    this.classeService.create(this.classe!)
    .subscribe( data => {
      this.goBack();
    },
        error => console.log(error));
  }
  loadOneClasse(): void {
    this.classeService.getById(this.id!)
      .subscribe(
        data => {
          this.classe = data;
          this.saveForm!.get('libelle')!.setValue(this.classe!.libelle)
        },
        error => {
          console.log(error);
        });
  }
  editClasse(){
    this.classe = Object.assign(this.saveForm!.value);
    this.classeService.update(this.id!, this.classe!)
      .subscribe(
        response => {
          console.log(response);
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
