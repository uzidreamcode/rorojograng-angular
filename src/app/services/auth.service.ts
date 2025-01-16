import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${baseUrl}/login`, { email, password });
  }

  register(nama: string, email: string, password: string, alamat: string, no_telp: string, role: string): Observable<any> {
    const token = this.getToken();
    const headers = { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzM3MDIwNTIxLCJleHAiOjE3MzcxMDY5MjF9.VN4YGYO9GrqALmOjGEQUkHQGaNHhK7n9KVKcEKqAzqk` };
    return this.http.post<any>(`${baseUrl}/add_karyawan`, { nama, email, password, alamat, no_telp, role }, { headers });
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}