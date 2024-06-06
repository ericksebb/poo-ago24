import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AlbumsModule { 
  constructor(private http: HttpClient) {}
  getAlbums() {
    return this.http.get('https://catfact.ninja/breeds').subscribe((response) => {
      console.log(response);
    });
  }
}
