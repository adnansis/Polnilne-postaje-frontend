import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostajeComponent} from './seznami/postaje.component';
import {PostajaDodajComponent} from './seznami/postaja-dodaj.component';
import {TerminDodajComponent} from './seznami/termin-dodaj.component';
import {TerminiComponent} from './seznami/termini.component';

const routes: Routes = [
    {path: '', redirectTo: '/postaje', pathMatch: 'full'},
    {path: 'postaje', component: PostajeComponent},
    {path: 'postaje/dodaj', component: PostajaDodajComponent},
    {path: 'termini', component: TerminiComponent},
    {path: 'termini/dodaj', component: TerminDodajComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
