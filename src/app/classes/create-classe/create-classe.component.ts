import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Classe, classes } from 'src/app/classe';

@Component({
  selector: 'app-create-classe',
  templateUrl: './create-classe.component.html',
  styleUrls: ['./create-classe.component.scss']
})
export class CreateClasseComponent implements OnInit {
  private id?:number;
  public saveForm!: FormGroup;
  public classe: any;
  private routeParams: any;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.routeParams =this.route.snapshot.paramMap;
    this.id = Number(this.routeParams.get('id'));
    if(this.id > 0)
      this.classe = classes.find((cl) => cl.id === this.id);
    else
      this.classe = new Classe();
    this.saveForm = this.fb.group({
      id: [
        this.classe.id
      ],
      libelle: [
        this.classe.libelle,
        [Validators.required, Validators.minLength(5)],
      ],
    });
  }
  saveClasse(){
    const index = classes.length - 1;
    const id = classes[index].id + 1;
    this.saveForm.get('id')?.patchValue(id);
    this.classe = Object.assign(this.classe, this.saveForm.value);
    classes.push(this.classe);
    this.goBack();
  }
  editClasse(classeId:number){
    const index = classes.findIndex((cl) => cl.id === classeId);
    classes[index] = Object.assign(classes[index], this.saveForm.value);
    this.goBack();
  }
  goBack(){
    this.location.back();
  }
}
