import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://hp-api.onrender.com/api/spells';

  constructor(private http: HttpClient) { }

  getCatBreeds(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(res=> res);
  }
  
  createCatBreed(catBreed: any): Observable<any> {
    return this.http.post(this.apiUrl, catBreed);
  }
}

