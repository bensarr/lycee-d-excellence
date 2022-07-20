import {Component, OnInit} from '@angular/core';
import {Classe} from 'src/app/models/classe';
import {ClassesService} from 'src/app/services/classes/classes.service';

@Component({
    selector: 'app-classes',
    templateUrl: './classes.component.html',
    styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

    listCl?: Classe[];
    deleteObject?: Classe;
    searchLibelle = "";
    searchDateMin = "";
    searchDateMax = "";

    constructor(
        private classeServices: ClassesService
    ) {
    }

    ngOnInit(): void {
        this.loadClasses()
    }

    public loadClasses() {
        this.classeServices.getAll()
            .subscribe(
                data => {
                    this.listCl = data;
                },
                error => {
                    console.log(error);
                });
    }

    filterClasses() {
        this.loadClasses();
        if (this.searchLibelle === "" && this.searchDateMin === "" && this.searchDateMax === "") {
            return;
        }
        if (this.searchLibelle !== "")
            this.listCl = this.listCl!.filter((t) => t.libelle!.toUpperCase().includes(this.searchLibelle.toUpperCase()));
        if (this.searchDateMin !== "")
            this.listCl = this.listCl!.filter((t) => new Date(this.searchDateMin) <= t.createdAt!);
        if (this.searchDateMax !== "")
            this.listCl = this.listCl!.filter((t) => new Date(this.searchDateMax) >= t.createdAt!);
    }
    delete() {
        this.classeServices.delete(this.deleteObject!._id!)
            .subscribe({
                next: res => {
                    console.log(res);
                    this.loadClasses();
                },
                error: e => console.error(e)
            });
    }

}
