import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VinylDataService } from '../../services/vinyl-data';
import { VinylAlbum, Genre } from '../../models/vinyl.interface';

@Component({
  selector: 'app-genre-collection',
  imports: [CommonModule],
  templateUrl: './genre-collection.html',
  styleUrl: './genre-collection.scss'
})
export class GenreCollectionComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private vinylDataService = inject(VinylDataService);
  
  albums: VinylAlbum[] = [];
  genre: Genre | undefined;
  genreName: string = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.genreName = params['genre'];
      this.loadGenreInfo();
      this.loadAlbums();
    });
  }

  loadGenreInfo() {
    this.vinylDataService.getGenre(this.genreName).subscribe(genre => {
      this.genre = genre;
    });
  }

  loadAlbums() {
    this.vinylDataService.getAlbumsByGenre(this.genreName).subscribe(albums => {
      this.albums = albums;
    });
  }

  navigateToAlbum(albumId: string) {
    this.router.navigate(['/album', albumId]);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
