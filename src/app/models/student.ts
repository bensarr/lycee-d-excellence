import { Classe } from "./classe";

export class Student {
  _id?: string;
  nom: string;
  prenom: string;
  classe: Classe;
  createdAt?: Date;
  updatedAt?: Date;
  constructor(){
    this.nom = '';
    this.prenom = '';
    this.classe = new Classe();
  }
}