import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})



export class SearchComponent implements OnInit {


  public artists: any[] = [];
  public loading: boolean;

  constructor( private _spotifyService: SpotifyService ) {}

  ngOnInit() {
  }


  searchArtist(termino: string) {
    
    this.loading = true;

    this._spotifyService.getArtists( termino ).subscribe ( (data: any) => {
      this.artists = data;
      this.loading = false;
    });
    
  }

}
