import {Component, OnInit} from '@angular/core';
import {Student} from 'src/app/models/student';
import {StudentsService} from 'src/app/services/students/students.service';
import {Classe} from "../../models/classe";

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
    listSt!: Student[];
    deleteObject: any;
    searchNom = "";
    searchPrenom = "";
    searchClasse = "";
    listCl!: Classe[];

    constructor(
        private studentService: StudentsService
    ) {
    }

    ngOnInit(): void {
        this.loadStudents();
    }

    private loadStudents() {
        this.studentService.getAll()
            .subscribe(
                data => {
                    this.listSt = data;
                },
                error => {
                    console.log(error);
                });
    }

    filterStudents() {
        this.loadStudents();
        if (this.searchNom === "" && this.searchPrenom === "" && this.searchClasse === "") {
            return;
        }
        if (this.searchNom !== "")
            this.listSt = this.listSt.filter((t) => t.nom!.toUpperCase().includes(this.searchNom.toUpperCase()));
        if (this.searchPrenom !== "")
            this.listSt = this.listSt.filter((t) => t.prenom!.toUpperCase().includes(this.searchPrenom.toUpperCase()));
        if (this.searchClasse)
            this.listSt = this.listSt.filter((t) => t.classe!._id === this.searchClasse);
    }
    delete() {
        this.studentService.delete(this.deleteObject!._id!)
            .subscribe({
                next: res => {
                    console.log(res);
                    this.loadStudents();
                },
                error: e => console.error(e)
            });
    }
}
