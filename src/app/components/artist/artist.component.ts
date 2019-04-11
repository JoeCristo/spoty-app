import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})


export class ArtistComponent implements OnInit {


  public artist: any = {};
  public loading: boolean;
  public topTracks: any[] = [];


  constructor( private router: ActivatedRoute,
               private _spotifyService: SpotifyService  ) { 

    this.loading = true;

    this.router.params.subscribe( params => {

      this.getArtist( params['id'] );
      this.getTopTracks( params['id']);
    });

  }


  ngOnInit() {
  }


  getArtist( id: string ) {

    this.loading = true;

    this._spotifyService.getArtist( id ).subscribe( (data: any) => {
      this.artist = data;

      this.loading = false;
    });

  }



  getTopTracks( id: string ) {

    this._spotifyService.getTopTracks( id ).subscribe( (data: any) => {
      this.topTracks = data;

    });

  }

}
