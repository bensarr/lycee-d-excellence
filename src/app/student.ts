import { Classe, classes } from "./classe";

export class Student {
  private id: Number;
  private nom: string;
  private prenom: string;
  private classe!: Classe;
  private createdAt: Date;
  constructor(){
    this.id = 0;
    this.nom = '';
    this.prenom = '';
    this.createdAt = new Date();
  }
}
export var students = [
  {
    'id': 1,
    'nom': 'SARR',
    'prenom': 'Penda',
    'classe': classes[1],
    'createdAt': new Date()
  }
];