import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'genre/:genre',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Return the genre parameters that should be prerendered
      return [
        { genre: 'rap' },
        { genre: 'rock' },
        { genre: 'pop' },
        { genre: 'soundtracks' }
      ];
    }
  },
  {
    path: 'album/:id',
    renderMode: RenderMode.Server // Use server rendering for album details since there are many albums
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
