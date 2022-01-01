import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { PostajeComponent } from './seznami/postaje.component';
import { PostajeService } from './seznami/services/postaje.service';
import { TerminDodajComponent } from './seznami/termin-dodaj.component';
import { PostajaDodajComponent } from './seznami/postaja-dodaj.component';
import { TerminiService } from './seznami/services/termini.service';
import { TerminiComponent } from './seznami/termini.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        PostajeComponent,
        TerminDodajComponent,
        PostajaDodajComponent,
        TerminiComponent
    ],
    providers: [PostajeService, TerminiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

