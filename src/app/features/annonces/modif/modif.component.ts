import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AnnonceService} from '../../../core/services/annonce.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-modif',
  imports: [
    FormsModule
  ],
  templateUrl: './modif.component.html',
  styleUrl: './modif.component.css'
})
export class ModifComponent {

  annonce: any = {};
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private annonceService: AnnonceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.annonceService.getAnnonceById(this.id).subscribe(data => {
      this.annonce = data;
    });
  }

  updateAnnonce(): void {
    this.annonceService.updateAnnonce(this.id, this.annonce).subscribe(() => {
      this.router.navigate(['/annonces']);
    });
  }

}
