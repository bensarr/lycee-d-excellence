import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classe } from 'src/app/models/classe';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  private baseUrl = `${environment.apiUrl}classes`;
  constructor(private http: HttpClient) { }
  getAll(): Observable<Classe[]>{
    return this.http.get<Classe[]>(this.baseUrl);
  }
  create(data: Classe): Observable<Classe>{
    return this.http.post<Classe>(this.baseUrl, data);
  }
  update(id: string, data: Classe): Observable<Classe> {
    return this.http.put<Classe>(`${this.baseUrl}/${id}`, data);
  }
  getById(id: string): Observable<Classe>{
    return this.http.get<Classe>(`${this.baseUrl}/${id}`);
  }
  delete(id: string): Observable<Classe>{
    return this.http.delete<Classe>(`${this.baseUrl}/${id}`);
  }
}
