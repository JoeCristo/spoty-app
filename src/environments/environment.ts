// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  
  production: false,
  authToken: 'BQAKm0qLH_G9lXA1J2bDEQjkdMXm6JW787RTuB5nSJ-XaVkKLutUn_vzIzYpqrB2dbu0RRbiVem0G6RW0Ac',
  url: 'https://api.spotify.com/v1/',
  urlFinalNewReleases: 'browse/new-releases?limit=20',
  urlFinalGetArtist: '&type=artist&market=ES&offset=0&limit=15',
  urlArtist: 'artists/',
  urlEndTopTracks: '/top-tracks?country=us'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


