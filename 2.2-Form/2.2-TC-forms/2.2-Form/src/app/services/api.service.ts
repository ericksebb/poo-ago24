import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, merge} from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  })
  export class ApiService {
  private url = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

create<T>(item: T): Observable<T> {
  const employees= this.http.post<T>(`${this.url}/employees`, item);
  const products= this.http.post<T>(`${this.url}/products`, item);
    return merge(employees, products);
}

}

