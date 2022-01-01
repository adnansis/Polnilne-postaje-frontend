export class NovaPostaja {
    ime: string;
    lokacija: string;
    moc: number;
    obratuje_od: string;
    obratuje_do: string;
    cena: number;
    na_voljo: boolean;
    uporabnik: {
        id_uporabnik: number;
        tip: string;
    }
}
