import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccueilComponent } from './accueil/accueil.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreationMemeOriginalComponent } from './creation-meme-original/creation-meme-original.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CreationMemeOriginalComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatProgressBarModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
