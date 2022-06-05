import { Component, OnInit } from '@angular/core';
import { classes } from '../classe';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  listCl = classes;
  deleteObject:any;
  searchLibelle = "";
  searchDateMin = "";
  searchDateMax = "";
  constructor() { }

  ngOnInit(): void {
  }

  filterClasses(){
    this.listCl = classes
    if(this.searchLibelle === "" && this.searchDateMin === "" && this.searchDateMax === ""){
      return;
    }
    if(this.searchLibelle !== "")
      this.listCl = this.listCl.filter((t) => t.libelle.toUpperCase().includes(this.searchLibelle.toUpperCase()));
    if(this.searchDateMin !== "")
      this.listCl = this.listCl.filter((t) => new Date(this.searchDateMin) <= t.createdAt);
    if(this.searchDateMax !== "")
      this.listCl = this.listCl.filter((t) => new Date(this.searchDateMax) >= t.createdAt);
  }

}
