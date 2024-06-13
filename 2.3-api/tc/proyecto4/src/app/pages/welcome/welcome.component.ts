import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';  
import { CatBreed } from '../../../../cats.Interface';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  imports: [CommonModule, NzTableModule, NzDividerModule], 
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  catBreeds: CatBreed[] = [];

  constructor(private http: HttpClient, private apiService: ApiService) { }

  ngOnInit() {
    this.fetchCatBreeds();
  }

  fetchCatBreeds() {
    const apiUrl = 'https://catfact.ninja/breeds';

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.catBreeds = response.data.map((item: any) => ({
          breed: item.breed,
          country: item.country,
          origin: item.origin,
          coat: item.coat,
          pattern: item.pattern
        }));
        console.log('Cat breeds:', this.catBreeds);
      },
      (error: any) => {
        console.error('Error fetching cat breeds:', error);
      }
    );
  }

  addCatBreed(catBreed: CatBreed) {
    this.apiService.createCatBreed(catBreed).subscribe(
      (response: any) => {
        console.log('Cat breed addedsuccessfully:', response);
},
(error: any) => {
console.error('Error adding cat breed:', error);
}
);
}
}
