import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';

@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule
  ],
  exports: [AlbumComponent] // Export if you want to use this component in other modules
})
export class AlbumModule { }
