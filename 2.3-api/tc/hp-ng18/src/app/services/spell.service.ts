import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spell } from '../models/spell';

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  private apiUrl = 'https://hp-api.onrender.com/api/spells';

  constructor(private http: HttpClient) { }

  getSpells(): Observable<Spell[]> {
    return this.http.get<Spell[]>(this.apiUrl);
  }
}
