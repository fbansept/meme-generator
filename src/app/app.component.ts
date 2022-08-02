import { Component } from '@angular/core';
import { ConnecteService } from './connecte.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public connecte: boolean = false;

  constructor(private connecteService: ConnecteService) { }

  ngOnInit() {
    this.connecteService._connecte.subscribe(
      valeur => this.connecte = valeur
    )
  }


}
