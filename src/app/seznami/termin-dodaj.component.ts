import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { NovTermin } from './models/novTermin';
import { TerminiService } from './services/termini.service';

@Component({
  selector: 'app-termin-dodaj',
  templateUrl: './termin-dodaj.component.html'
})
export class TerminDodajComponent implements OnInit {

  novTermin: NovTermin = {
    uporabnik: {
      id_uporabnik: 0,
      uporabnisko_ime: ''
    },
    postaja: {
      id_postaja: 0
    },
    termin_od: '',
    termin_do: ''
  }

  constructor(private terminiService: TerminiService, private router: Router) { }

  dodaj(): void {
    if (!this.preveriPodatke()) {
      alert('Neveljavni podatki.');
    } else {
      this.terminiService
          .dodaj(this.novTermin)
          .subscribe();
    }
  }

  preveriPodatke(): boolean {
    const x = this.novTermin;

    if (x.uporabnik.id_uporabnik <= 0 || x.postaja.id_postaja <= 0) {
      return false;
    }
    return true;
  }

  nazaj(): void {
    this.router.navigate(['/termini']);
  }

  ngOnInit(): void {
  }

}
