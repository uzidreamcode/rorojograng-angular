import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/user'; // Import ApiResponse

const baseUrl = 'http://127.0.0.1:8000/api/getkaryawan';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(page: number = 1, limit: number = 1): Observable<ApiResponse> {
    let params = new HttpParams().set('page', page.toString()).set('limit', limit.toString());
    return this.http.get<ApiResponse>(baseUrl, { params });
  }
}