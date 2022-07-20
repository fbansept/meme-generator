import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creation-meme-original',
  templateUrl: './creation-meme-original.component.html',
  styleUrls: ['./creation-meme-original.component.scss']
})
export class CreationMemeOriginalComponent implements OnInit {

  public fichier : File | null = null

  constructor(private client: HttpClient) { }

  public formulaire: FormGroup = new FormGroup(
    {
      nom: new FormControl("", [Validators.required, Validators.minLength(3)]),
      description: new FormControl("", [Validators.required]),
    }
  )

  ngOnInit(): void {

  }

  onFichierChange(e : any){
    this.fichier = e.target.files[0];
  }

  onSubmit() {

    if (this.formulaire.valid) {

      const formData = new FormData();

      if(this.fichier != null){
        formData.append("image", this.fichier)
      }

      formData.append("meme", JSON.stringify(this.formulaire.value))

      const headers = new HttpHeaders()
      //  .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');

      this.client
        .post("http://localhost:4000/meme", formData,
          { 'headers': headers })
        .subscribe(reponse => alert("meme ajouté"))

    }

  }
}
