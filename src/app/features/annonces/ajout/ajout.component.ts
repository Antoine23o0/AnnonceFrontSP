import { Component } from '@angular/core';
import {AnnonceService} from '../../../core/services/annonce.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ajout',
  imports: [
    FormsModule
  ],
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent {

  annonce = {
    title: '',
    description: '',
    adress: '',
    mail: ''
  };

  constructor(private annonceService: AnnonceService, private router: Router) {}

  ajouterAnnonce(): void {
    this.annonceService.addAnnonce(this.annonce).subscribe(() => {
      this.router.navigate(['/annonces']);
    });
  }
}
