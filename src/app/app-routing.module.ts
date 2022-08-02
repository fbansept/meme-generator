import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnecteGuard } from './connecte.guard';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreationMemeOriginalComponent } from './creation-meme-original/creation-meme-original.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  { path: "", component: AccueilComponent },
  { path: "creation-meme-original", component: CreationMemeOriginalComponent, canActivate: [ConnecteGuard] },
  { path: "inscription", component: InscriptionComponent },
  { path: "connexion", component: ConnexionComponent },
  { path: "**", component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
