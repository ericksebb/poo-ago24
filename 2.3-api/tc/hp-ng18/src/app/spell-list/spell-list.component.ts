import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SpellService } from '../services/spell.service'; // Adjust path as necessary
import { Spell } from '../models/spell'; // Adjust path as necessary

@Component({
  selector: 'app-spell-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {
  spells: Spell[] = [];

  constructor(private spellService: SpellService) { }

  ngOnInit(): void {
    this.spellService.getSpells().subscribe((data: Spell[]) => {
      this.spells = data;
    });
  }
}
