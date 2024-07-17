import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    })
    export class SensorService {
        private url = 'http://localhost:3000';

        constructor(private http: HttpClient) { }

        getAllSensors<T>(id: number): Observable<T[]> {
            return this.http.get<T[]>(`${this.url}/sensors`);
          }
          getSensor<T>(id: number): Observable<T> {
            return this.http.get<T>(`${this.url}/sensors/${id}`);
          }
          createSensor<T>(item: T): Observable<T> {
            return this.http.post<T>(`${this.url}/sensors`, item);
          }
          patchSensor<T>(id: number, item: T) {
            return this.http.patch<T>(`${this.url}/sensors/${id}`, item);
          }
          deleteSensor<T>(id: number): Observable<void> {
            return this.http.delete<void>(`${this.url}/sensors/${id}`);
          }
        }