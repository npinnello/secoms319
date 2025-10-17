import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, CommonModule, TitleCasePipe } from '@angular/common';
import { VinylDataService } from '../../services/vinyl-data';
import { VinylAlbum } from '../../models/vinyl.interface';
import { from } from 'rxjs';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.scss']
})
export class AlbumDetailComponent implements OnInit {
  album: VinylAlbum | undefined;
  albumId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private vinylDataService: VinylDataService
  ) {}

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
