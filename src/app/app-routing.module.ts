import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CreationMemeOriginalComponent } from './creation-meme-original/creation-meme-original.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  { path: "", component: AccueilComponent },
  { path: "creation-meme-original", component: CreationMemeOriginalComponent },
  { path: "inscription", component: InscriptionComponent },
  { path: "**", component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
