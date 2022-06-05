import { Component, Input, OnInit } from '@angular/core';
import { students } from '../student';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {

  @Input() list!: any;
  @Input() element!: any;
  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    var listSt = students.filter((s) => s.classe.id === this.element.id);
    if(listSt.length > 0)
      listSt.forEach((st: any) => {
        const i = students.findIndex((e: any)=> e.id === st.id);
        students.splice(i, 1);
      });
    const index = this.list.findIndex((e: any)=> e.id === this.element.id);
    this.list.splice(index, 1);
  }

}
