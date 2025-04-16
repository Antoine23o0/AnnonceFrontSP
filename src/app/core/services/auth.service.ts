import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';
  private profilSource = new BehaviorSubject<string>('');
  profil$ = this.profilSource.asObservable();

  constructor() {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      const username = atob(token.replace('Basic ', '')).split(':')[0];
      this.setProfil(username);
    }
  }


  login(username: string, password: string, role : string): void {
    const authHeader = 'Basic ' + btoa(`${username}:${password}`);
    localStorage.setItem(this.tokenKey, authHeader);
    localStorage.setItem('userRole',role)
    this.setProfil(username);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem('userRole');
    this.setProfil('');
  }

  getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem(this.tokenKey);
    return new HttpHeaders(token ? { Authorization: token } : {});
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.tokenKey) !== null;
  }

  getUserRole(): string {
    return localStorage.getItem('userRole')?.toUpperCase() || '';
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'ADMIN';
  }

  setProfil(profil: string): void {
    this.profilSource.next(profil);
  }
}

