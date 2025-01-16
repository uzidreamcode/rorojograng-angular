import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, User } from '../models/user';

const baseUrl = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(page: number = 1, limit: number = 1): Observable<ApiResponse> {
    let params = new HttpParams().set('page', page.toString()).set('limit', limit.toString());
    return this.http.get<ApiResponse>(`${baseUrl}/getkaryawan`, { params });
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${baseUrl}/get_profile?id=${id}`);
  }
}