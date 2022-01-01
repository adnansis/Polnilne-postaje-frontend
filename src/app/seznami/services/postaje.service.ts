import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

import {Postaja} from '../models/postaja';
import {Observable} from 'rxjs';
import {Termin} from '../models/termin';

@Injectable({
    providedIn: 'root'
})
export class PostajeService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/v1/postaje';

    constructor(private http: HttpClient, private router: Router) { }

    getPostaje(): Observable<Postaja[]> {
        return this.http
            .get<Postaja[]>(this.url)
            .pipe(catchError(this.handleError));
    }

    getTerminiByPostajaId(id: number): Observable<any> {
        const url = `http://localhost:8080/v1/termini/postaje/${id}`;
        return this.http
            .get<Termin[]>(url)
            .pipe(catchError(this.handleError));
    }

    delete(id: number): Observable<any> {
        const url = `${this.url}/${id}`;
        return this.http
            .delete<any>(url, {headers: this.headers})
            .pipe(catchError(this.handleDeleteError));
    }

    dodaj(postaja): Observable<any> {
        return this.http
            .post<any>(this.url, postaja, {headers: this.headers})// greska? novaPostaja namesto postaja
            .pipe(catchError(this.handleError));
    }

    // ne dela
    osveziPostaje(): void {
        this.router.navigate(['/']);
    }

    private handleError(error: any): Promise<any> {
        alert('Prišlo je do napake.');
        return Promise.reject(error.message || error);
    }

    private handleDeleteError(error: any): Promise<any> {
        alert('Prišlo je do napake. Preverite, ali postaja ima rezerviran termin in poskusite znova.');
        return Promise.reject(error.message || error);
    }
}
