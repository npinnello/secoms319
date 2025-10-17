import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VinylDataService } from '../../services/vinyl-data';
import { Genre, VinylAlbum } from '../../models/vinyl.interface';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  private vinylDataService = inject(VinylDataService);
  private router = inject(Router);
  
  genres: Genre[] = [];
  featuredAlbums: VinylAlbum[] = [];
  albumCounts: { [key: string]: number } = {};

  ngOnInit() {
    this.loadGenres();
    this.loadFeaturedAlbums();
    this.calculateAlbumCounts();
  }

  loadGenres() {
    this.vinylDataService.getAllGenres().subscribe(genres => {
      this.genres = genres;
    });
  }

  loadFeaturedAlbums() {
    this.vinylDataService.getAllAlbums().subscribe(albums => {
      // Get a few featured albums from different genres
      this.featuredAlbums = albums.slice(0, 3);
    });
  }

  calculateAlbumCounts() {
    this.vinylDataService.getAllAlbums().subscribe(albums => {
      albums.forEach(album => {
        this.albumCounts[album.genre] = (this.albumCounts[album.genre] || 0) + 1;
      });
    });
  }

  getAlbumCount(genre: string): number {
    return this.albumCounts[genre] || 0;
  }

  navigateToGenre(genre: string) {
    this.router.navigate(['/genre', genre]);
  }

  navigateToAlbum(albumId: string) {
    this.router.navigate(['/album', albumId]);
  }
}
