import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Papeterie } from '../model-papeterie/papeterie.model'; // Assuming you have a Papeterie model

@Injectable({
  providedIn: 'root'
})
export class PapeterieService {
  private apiUrl = 'https://localhost:7088/api';

  constructor(private http: HttpClient) {}

  getPapeteries(): Observable<Papeterie[]> {
    return this.http.get<Papeterie[]>(this.apiUrl);
  }

  getPapeterieById(id: number): Observable<Papeterie> {
    return this.http.get<Papeterie>(`${this.apiUrl}/${id}`);
  }

  addPapeterie(papeterie: Papeterie): Observable<Papeterie> {
    return this.http.post<Papeterie>(this.apiUrl, papeterie);
  }

  updatePapeterie(id: number, papeterie: Papeterie): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, papeterie);
  }

  deletePapeterie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
