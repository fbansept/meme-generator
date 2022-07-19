import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creation-meme-original',
  templateUrl: './creation-meme-original.component.html',
  styleUrls: ['./creation-meme-original.component.scss']
})
export class CreationMemeOriginalComponent implements OnInit {

  constructor(private client: HttpClient) { }

  public formulaire: FormGroup = new FormGroup(
    {
      nom: new FormControl("", [Validators.required, Validators.minLength(3)]),
      description: new FormControl("", [Validators.required]),
    }
  )

  ngOnInit(): void {


  }

  onSubmit() {

    if (this.formulaire.valid) {

      const headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');

      this.client
        .post("http://localhost:4000/meme", this.formulaire.value,
          { 'headers': headers })
        .subscribe(reponse => alert("meme ajouté"))

    }

  }
}
