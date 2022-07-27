import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  public avatar: File | null = null
  public sourceAvatar: string = ""

  public formulaire: FormGroup = new FormGroup(
    {
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl("", [Validators.required])
    }
  );

  constructor(private client: HttpClient) { }

  ngOnInit(): void {
  }

  onChangeAvatar(e: any) {
    if (e.target.files[0]) {
      this.avatar = e.target.files[0]

      const reader = new FileReader()

      reader.onload = (eventReader: any) => this.sourceAvatar = eventReader.target.result

      reader.readAsDataURL(e.target.files[0])
    }
  }

  onSubmit() {
    this.formulaire.markAllAsTouched();



    if (this.formulaire.valid) {

      const headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');

      this.client
        .post("http://localhost:4000/utilisateur", this.formulaire.value, { headers })
        .subscribe(retour => console.log(retour))
    }

  }

}
