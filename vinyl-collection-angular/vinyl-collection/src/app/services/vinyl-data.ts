import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VinylAlbum, Genre } from '../models/vinyl.interface';

@Injectable({
  providedIn: 'root'
})
export class VinylDataService {

  private albums: VinylAlbum[] = [
    // Rap/Hip-Hop Albums
    {
      id: 'astroworld',
      title: 'Astroworld',
      artist: 'Travis Scott',
      genre: 'rap',
      year: 2018,
      image: 'assets/rapImages/astroworld.jpg',
      description: 'Travis Scott\'s third studio album featuring hits like "Sicko Mode" and "Butterfly Effect".'
    },
    {
      id: 'gkmc',
      title: 'Good Kid, M.A.A.D City',
      artist: 'Kendrick Lamar',
      genre: 'rap',
      year: 2012,
      image: 'assets/rapImages/GKMC.jpg',
      description: 'Kendrick Lamar\'s major-label debut studio album, widely considered a hip-hop classic.'
    },
    {
      id: 'bt3',
      title: 'Bobby Tarantino III',
      artist: 'Logic',
      genre: 'rap',
      year: 2021,
      image: 'assets/rapImages/BT3.jpg',
      description: 'The third installment in Logic\'s Bobby Tarantino mixtape series.'
    },
    {
      id: 'college-dropout',
      title: 'The College Dropout',
      artist: 'Kanye West',
      genre: 'rap',
      year: 2004,
      image: 'assets/rapImages/CollegeDropout.jpg',
      description: 'Kanye West\'s debut studio album that revolutionized hip-hop production.'
    },
    {
      id: 'blue-slide-park',
      title: 'Blue Slide Park',
      artist: 'Mac Miller',
      genre: 'rap',
      year: 2011,
      image: 'assets/rapImages/Blue.jpg',
      description: 'Mac Miller\'s debut studio album, debuting at number one on the US Billboard 200.'
    },
    {
      id: 'mr-morales',
      title: 'Mr. Morale & The Big Steppers',
      artist: 'Kendrick Lamar',
      genre: 'rap',
      year: 2022,
      image: 'assets/rapImages/MrMorales.jpg',
      description: 'Kendrick Lamar\'s fifth studio album, his first since DAMN.'
    },
    {
      id: 'flowerboy',
      title: 'Flower Boy',
      artist: 'Tyler, The Creator',
      genre: 'rap',
      year: 2017,
      image: 'assets/rapImages/flowerboy.jpg',
      description: 'Tyler\'s fourth studio album marking a significant evolution in his sound.'
    },
    {
      id: 'divine-feminine',
      title: 'The Divine Feminine',
      artist: 'Mac Miller',
      genre: 'rap',
      year: 2016,
      image: 'assets/rapImages/divineFem.jpg',
      description: 'Mac Miller\'s fourth studio album exploring themes of love and relationships.'
    },
    {
      id: 'goblin',
      title: 'Goblin',
      artist: 'Tyler, The Creator',
      genre: 'rap',
      year: 2011,
      image: 'assets/rapImages/goblin.jpg',
      description: 'Tyler\'s debut studio album that established his unique artistic voice.'
    },
    {
      id: 'late-registration',
      title: 'Late Registration',
      artist: 'Kanye West',
      genre: 'rap',
      year: 2005,
      image: 'assets/rapImages/lateReg.jpg',
      description: 'Kanye\'s second album featuring orchestral arrangements and conscious rap.'
    },

    // Rock Albums  
    {
      id: 'nevermind',
      title: 'Nevermind',
      artist: 'Nirvana',
      genre: 'rock',
      year: 1991,
      image: 'assets/rockImages/nevermind.jpg',
      description: 'Nirvana\'s breakthrough album that brought grunge to the mainstream.'
    },

    // Soundtracks
    {
      id: 'stranger-things',
      title: 'Stranger Things Soundtrack',
      artist: 'Various Artists',
      genre: 'soundtracks',
      year: 2016,
      image: 'assets/soundTrackImages/strangerThings.jpg',
      description: 'The atmospheric soundtrack from the hit Netflix series.'
    }
  ];

  private genres: Genre[] = [
    {
      name: 'rap',
      displayName: 'Rap/Hip-Hop',
      description: 'Hip-hop and rap albums featuring conscious lyrics and innovative beats.'
    },
    {
      name: 'rock',
      displayName: 'Rock',
      description: 'Classic and alternative rock albums that defined generations.'
    },
    {
      name: 'soundtracks',
      displayName: 'Soundtracks',
      description: 'Movie and TV soundtracks that enhance storytelling through music.'
    },
    {
      name: 'pop',
      displayName: 'Pop',
      description: 'Popular music that resonates with mainstream audiences.'
    }
  ];

  constructor() { }

  getAllAlbums(): Observable<VinylAlbum[]> {
    return of(this.albums);
  }

  getAlbumsByGenre(genre: string): Observable<VinylAlbum[]> {
    const filteredAlbums = this.albums.filter(album => album.genre === genre);
    return of(filteredAlbums);
  }

  getAlbumById(id: string): Observable<VinylAlbum | undefined> {
    const album = this.albums.find(album => album.id === id);
    return of(album);
  }

  getAllGenres(): Observable<Genre[]> {
    return of(this.genres);
  }

  getGenre(name: string): Observable<Genre | undefined> {
    const genre = this.genres.find(g => g.name === name);
    return of(genre);
  }
}
