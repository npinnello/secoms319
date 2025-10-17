export interface VinylAlbum {
  id: string;
  title: string;
  artist: string;
  genre: 'rap' | 'rock' | 'soundtracks' | 'pop';
  year?: number;
  image: string;
  description?: string;
  trackList?: string[];
}

export interface Genre {
  name: string;
  displayName: string;
  description: string;
}
