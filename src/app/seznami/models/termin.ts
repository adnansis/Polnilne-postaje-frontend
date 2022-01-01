import {Postaja} from './postaja';
import {Uporabnik} from './uporabnik';

export class Termin {
    id_termin: number;
    termin_od: string;
    termin_do: string;
    postaja: Postaja;
    uporabnik: Uporabnik;
}
