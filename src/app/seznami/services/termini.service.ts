import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

import {Termin} from '../models/Termin';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerminiService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/v1/termini';

    constructor(private http: HttpClient, private router: Router) { }

    getTermini(): Observable<Termin[]> {
        return this.http
            .get<Termin[]>(this.url)
            .pipe(catchError(this.handleError));
    }

    delete(id: number): Observable<any> {
        const url = `${this.url}/${id}`;
        return this.http
            .delete<any>(url, {headers: this.headers})
            .pipe(catchError(this.handleError));
    }

    dodaj(termin): Observable<any> {
        return this.http
            .post<any>(this.url, termin, {headers: this.headers})
            .pipe(catchError(this.handleError));
    }

    // ne dela, dela, če redirectam na drugo stran
    osveziTermine(): void {
        this.router.navigate(['/termini']);
    }

    private handleError(error: any): Promise<any> {
        alert('Prišlo je do napake.');
        return Promise.reject(error.message || error);
    }
}
