import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { NovaPostaja } from './models/novaPostaja';
import { PostajeService } from './services/postaje.service';

@Component({
  selector: 'app-postaja-dodaj',
  templateUrl: './postaja-dodaj.component.html'
})
export class PostajaDodajComponent implements OnInit {

  novaPostaja: NovaPostaja = {
    ime: '',
    lokacija: '',
    moc: 0.0,
    obratuje_od: '',
    obratuje_do: '',
    cena: 0.0,
    na_voljo: true,
    uporabnik: {
      id_uporabnik: 0,
      tip: 'lastnik'
    }
  }

  constructor(private postajeService: PostajeService, private router: Router) { }

  preveriPodatke(): boolean {
    const x = this.novaPostaja;

    if (x.ime.length <= 0 || x.lokacija.length <= 0 || x.moc <= 0 || x.cena <= 0 || x.uporabnik.id_uporabnik <= 0) {
      return false;
    }
    return true;
  }

  dodaj(): void {
    if (!this.preveriPodatke()) {
      alert('Neveljavni podatki.')
    } else {
      this.postajeService
          .dodaj(this.novaPostaja)
          .subscribe();
    }
  }

  nazaj(): void {
    this.router.navigate(['/postaje']);
  }

  ngOnInit(): void {
  }

}
