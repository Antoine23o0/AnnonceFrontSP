import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AnnonceService} from '../../../core/services/annonce.service';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-list',
  imports: [
    DatePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  annonces: any[] = [];
  isAdmin: boolean = false;

  constructor(private annonceService: AnnonceService, private router: Router,private authService: AuthService) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.getUserRole() === 'ADMIN';
    this.annonceService.getAnnonces().subscribe((data) => {
      this.annonces = data;
    });
  }

  goToModifier(id: number): void {
    this.router.navigate(['/modifAnnonce', id]);
  }

  deleteAnnonce(id: number): void {
    this.annonceService.deleteAnnonce(id).subscribe(() => {
      this.annonces = this.annonces.filter(a => a.id !== id);
    });
  }


}
