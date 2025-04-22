import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environnement/env';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private baseUrl = `${environment.apiUrl}/api/annonces`;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getAnnonces(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl, {
      headers: this.authService.getAuthHeaders()
    });
  }

  getAnnonceById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  addAnnonce(annonce: any): Observable<any> {
    return this.http.post(this.baseUrl, annonce, {
      headers: this.authService.getAuthHeaders()
    });
  }

  updateAnnonce(id: number, annonce: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, annonce, {
      headers: this.authService.getAuthHeaders()
    });
  }

  deleteAnnonce(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {
      headers: this.authService.getAuthHeaders()
    });
  }
}
