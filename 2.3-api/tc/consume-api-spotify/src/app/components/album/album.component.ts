import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  album: any;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getAlbum('4kZggLkaCdeboIu94dn8KB');
  }

  async getAlbum(albumId: string) {
    this.album = await this.spotifyService.getAlbum(albumId);
  }
}
