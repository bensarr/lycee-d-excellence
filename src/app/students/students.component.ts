import { Component, OnInit } from '@angular/core';
import { classes } from '../classe';
import { students } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  listSt = students;
  deleteObject:any;
  searchNom = "";
  searchPrenom = "";
  searchClasse = 0;
  listCl = classes;
  constructor() { }

  ngOnInit(): void {
  }

  filterStudents(){
    this.listSt = students
    if(this.searchNom === "" && this.searchPrenom === "" && Number(this.searchClasse) === 0){
      return;
    }
    if(this.searchNom !== "")
      this.listSt = this.listSt.filter((t) => t.nom.toUpperCase().includes(this.searchNom.toUpperCase()));
    if(this.searchPrenom !== "")
      this.listSt = this.listSt.filter((t) => t.prenom.toUpperCase().includes(this.searchPrenom.toUpperCase()));
    if(this.searchClasse)
      this.listSt = this.listSt.filter((t) => t.classe.id == this.searchClasse);
  }
}
