import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../core/services/auth.service';
import {Router, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    RouterLink,
    NgIf
  ]
})
export class NavbarComponent implements OnInit {
  profil = '';

  constructor(public authService: AuthService,private router: Router) {}

  ngOnInit(): void {
    this.authService.profil$.subscribe((value) => {
      this.profil = value;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
