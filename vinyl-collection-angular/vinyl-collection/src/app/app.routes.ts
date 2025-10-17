import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { GenreCollectionComponent } from './components/genre-collection/genre-collection';
import { AlbumDetailComponent } from './components/album-detail/album-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'genre/:genre', component: GenreCollectionComponent },
  { path: 'album/:id', component: AlbumDetailComponent },
  { path: '**', redirectTo: '' }
];
