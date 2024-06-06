import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: true,
})
export class WelcomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchCatBreeds();
  }

  fetchCatBreeds() {
    const apiUrl = 'https://catfact.ninja/breeds';

    this.http.get(apiUrl).subscribe((response: any) => {
      console.log(response);
    });
  }
}
