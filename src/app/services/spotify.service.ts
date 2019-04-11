import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})



export class SpotifyService {

  private tokenAuth: string = environment.authToken;
  private url: string = environment.url;
  private urlFinalNewReleases: string = environment.urlFinalNewReleases;
  private urlFinalGetArtist: string = environment.urlFinalGetArtist;
  private urlArtist: string = environment.urlArtist;
  private urlEndTopTracks: string = environment.urlEndTopTracks;



  constructor( private http: HttpClient ) { }



  getQuery ( query: string) {

    const URL = this.url + query;

    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer ' + this.tokenAuth
    });

    return this.http.get( URL, { headers } );

  }



  getNewReleases () {
    
    return this.getQuery( this.urlFinalNewReleases )
      .pipe( map ( data => data['albums'].items ));

  }



  getArtists (termino: string) {

    return this.getQuery(`search?query=${ termino + this.urlFinalGetArtist }`)
      .pipe( map ( data => data['artists'].items ));

  }



  getArtist (id: string) {
    
    return this.getQuery(this.urlArtist + id);
      
  }



  getTopTracks (id: string) {
    
    return this.getQuery(this.urlArtist + id + this.urlEndTopTracks)
      .pipe( map ( data => data['tracks'] ));
      
  }

}
