import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Postaja } from './models/postaja';
import { Termin } from './models/termin';
import { PostajeService } from './services/postaje.service';

@Component({
    selector: 'vse-postaje',
    templateUrl: './postaje.component.html'
})
export class PostajeComponent implements OnInit {

    postaje: Postaja[];
    termini: Termin[];

    constructor(private postajeService: PostajeService, private router: Router) { }

    getPostaje(): void {
        this.postajeService
            .getPostaje()
            .subscribe(postaje => this.postaje = postaje);
    }

    getTerminiByPostajaId(id_postaja: number): void {
          this.postajeService
              .getTerminiByPostajaId(id_postaja)
              .subscribe(termini => this.termini = termini);
    }

    delete(postaja: Postaja): void {
        this.postajeService
            .delete(postaja.id_postaja)
            .subscribe();
    }

    naprej(): void {
        this.router.navigate(['/postaje/dodaj']);
    }

    // ne dela
    osveziPostaje(): void {
        this.postajeService
            .osveziPostaje();
    }

    ngOnInit(): void {
        this.getPostaje();
    }

}
