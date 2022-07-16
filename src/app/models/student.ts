import { Classe } from "./classe";

export class Student {
  private _id: string;
  private _nom: string;
  private _prenom: string;
  private _classe!: Classe;
  private _createdAt: Date;
  constructor(){
    this._id = '';
    this._nom = '';
    this._prenom = '';
    this._createdAt = new Date();
  }
  set id(id: string) {
    this._id = id;
  }
  get id(): string { // Property - empId
    return this._id;
  }
  set nom(nom: string) {
    this._nom = nom;
  }
  get nom(): string { // Property - empId
    return this._nom;
  }
  set prenom(prenom: string) {
    this._prenom = prenom;
  }
  get prenom(): string { // Property - empId
    return this._prenom;
  }
  set classe(classe: Classe) {
    this._classe = classe;
  }
  get classe(): Classe { // Property - empId
    return this._classe;
  }
  get createdAt(): Date { // Property - empId
    return this._createdAt;
  }
}