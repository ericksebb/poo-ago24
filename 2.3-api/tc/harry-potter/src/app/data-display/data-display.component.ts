import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {NzTableModule} from 'ng-zorro-antd/table';


@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NzTableModule],
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  httpClient = inject(HttpClient);
  spells: any = [];

  ngOnInit(): void {
    this.fetchSpells(); 
  }

  fetchSpells() {
    this.httpClient.get("https://hp-api.onrender.com/api/spells").subscribe((spells: any) => {
      this.spells = spells; 
      console.log(spells) 
    });
  }
}
