import { Component } from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  username: string = '';
  password: string = '';
  role: string = 'user';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin(): void {
    // Appel de la méthode login de ton service d'authentification
    this.authService.login(this.username, this.password,this.role);
    this.authService.setProfil(this.username);

    // En fonction du rôle choisi, on redirige l'utilisateur vers la bonne page
    if (this.role === 'admin') {
      this.router.navigate(['/admin-dashboard']);  // Page d'administration
    } else {
      this.router.navigate(['/annonces']);  // Page des annonces
    }
  }

}
