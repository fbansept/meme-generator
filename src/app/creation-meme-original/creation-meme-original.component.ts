import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creation-meme-original',
  templateUrl: './creation-meme-original.component.html',
  styleUrls: ['./creation-meme-original.component.scss']
})
export class CreationMemeOriginalComponent implements OnInit {

  public fichier: File | null = null
  public sourceImage: String = "";
  public progressionUpload: number | null = null;

  constructor(private client: HttpClient) { }

  public formulaire: FormGroup = new FormGroup(
    {
      nom: new FormControl("", [Validators.required, Validators.minLength(3)]),
      description: new FormControl("", [Validators.required]),
    }
  )

  ngOnInit(): void {

  }

  onFichierChange(e: any) {

    if (e.target.files[0]) {
      this.fichier = e.target.files[0];

      const reader = new FileReader()

      reader.onload = (eventReader: any) => this.sourceImage = eventReader.target.result

      reader.readAsDataURL(e.target.files[0])

    }
  }

  onSubmit() {

    if (this.formulaire.valid) {

      const formData = new FormData();

      if (this.fichier != null) {
        formData.append("image", this.fichier)
      }

      formData.append("meme", JSON.stringify(this.formulaire.value))

      const headers = new HttpHeaders()
        //  .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');

      this.client
        .post("http://localhost:4000/meme", formData,
          {
            'headers': headers,
            reportProgress: true,
            observe: 'events'
          })
        .subscribe({
          next: (retour) => {
            if (retour.type == HttpEventType.UploadProgress && retour.total) {
              this.progressionUpload = Math.round(100 * (retour.loaded / retour.total))
            }
          },
          error: (e) => {
            if (e.status == 400) {
              alert("Image trop lourde")
            } else {
              alert("Erreur")
            }
          },
          complete: () => alert("Meme ajouté")
        })
    }

  }
}
