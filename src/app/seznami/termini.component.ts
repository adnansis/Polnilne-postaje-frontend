import { Component, OnInit } from '@angular/core';
import {Termin} from './models/termin';
import {TerminiService} from './services/termini.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Postaja} from './models/postaja';

@Component({
    selector: 'vse-termini',
    templateUrl: './termini.component.html'
})
export class TerminiComponent implements OnInit {

    termini: Termin[];

    constructor(private terminiService: TerminiService, private router: Router) { }

    getTermini(): void {
        this.terminiService
            .getTermini()
            .subscribe(termini => this.termini = termini);
    }

    delete(termin: Termin): void {
        this.terminiService
            .delete(termin.id_termin)
            .subscribe();
    }

    naprej(): void {
        this.router.navigate(['/termini/dodaj']);
    }

    // ne dela
    osveziTermine(): void {
        this.terminiService
            .osveziTermine();
    }

    ngOnInit(): void {
        this.getTermini();
    }

}
