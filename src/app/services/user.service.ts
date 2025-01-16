import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/user'; // Import ApiResponse

const baseUrl = 'http://127.0.0.1:8000/api/getkaryawan';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(baseUrl);
  }
}
