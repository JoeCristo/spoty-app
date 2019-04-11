import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})



export class HomeComponent implements OnInit {

  
  public newReleases: any[] = [];
  public loading: boolean;
  public error: boolean;
  public messageError: string;


  constructor( private _spotifyService: SpotifyService ) {

    this.loading = true;
    this.error = false;

    this._spotifyService.getNewReleases().subscribe( (data: any) => {

      this.newReleases = data;
      this.loading = false;

    }, ( errorService ) => {

      this.loading = false;
      this.error = true;
      this.messageError = errorService.error.error.message;

    });
  
  }

  
  ngOnInit() {
  }

}
