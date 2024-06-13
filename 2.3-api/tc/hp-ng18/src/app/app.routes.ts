import { Routes } from '@angular/router';
import { SpellListComponent } from './spell-list/spell-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/spells', pathMatch: 'full' },
  { path: 'spells', component: SpellListComponent },
  { path: '**', redirectTo: '/spells' }
];
