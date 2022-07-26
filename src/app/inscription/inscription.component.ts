import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  public formulaire: FormGroup = new FormGroup(
    {
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl("", [Validators.required])
    }
  );

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.formulaire.markAllAsTouched();

    if(this.formulaire.valid) {
      
    }

  }

}
