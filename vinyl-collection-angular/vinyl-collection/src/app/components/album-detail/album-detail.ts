import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { VinylDataService } from '../../services/vinyl-data';
import { VinylAlbum } from '../../models/vinyl.interface';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.scss']
})
export class AlbumDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  private vinylDataService = inject(VinylDataService);
  
  album: VinylAlbum | undefined;
  albumId: string = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.albumId = params['id'];
      this.loadAlbum();
    });
  }

  loadAlbum() {
    this.vinylDataService.getAlbumById(this.albumId).subscribe(album => {
      this.album = album;
    });
  }

  goBack() {
    this.location.back();
  }

  navigateToGenre(genre: string) {
    this.router.navigate(['/genre', genre]);
  }
}
