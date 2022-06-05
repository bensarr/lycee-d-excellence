import { students } from "./student";

export class Classe {
  private id: Number;
  private libelle: string;
  private createdAt: Date;

  constructor(){
    this.id = 0;
    this.libelle = '';
    this.createdAt = new Date();
  }
  // students = () =>{
  //   return this.id === 0 ?[]:students.filter((s) => s.classe.id === this.id);
  // }

}

export var classes = [
  {
    'id': 1,
    'libelle': 'Terminal S1',
    'createdAt': new Date(),
  },
  {
    'id': 2,
    'libelle': 'Terminal S2',
    'createdAt': new Date(),
  },
  {
    'id': 3,
    'libelle': 'Terminal L1a',
    'createdAt': new Date(),
  },
  {
    'id': 4,
    'libelle': 'Terminal L2b',
    'createdAt': new Date(),
  },
]