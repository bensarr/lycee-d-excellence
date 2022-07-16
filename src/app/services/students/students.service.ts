import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseUrl = `${environment.apiUrl}categories`;
  constructor(private http: HttpClient) { }
  getAll(): Observable<Student[]>{
    return this.http.get<Student[]>(this.baseUrl);
  }
  create(data: Student): Observable<Student>{
    return this.http.post<Student>(this.baseUrl, data);
  }
  update(id: string, data: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/${id}`, data);
  }
  getById(id: string): Observable<Student>{
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }
  delete(id: string): Observable<Student>{
    return this.http.delete<Student>(`${this.baseUrl}/${id}`);
  }
}
