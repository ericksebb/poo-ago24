import { Injectable, Type } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private clientId = 'bbe0442875804f5a8b3330eeea903248';
  private clientSecret = 'a1116f2d83ae45708c3e9c0116004d92';
  private token: string | null = null;

  constructor() {
    this.getToken();
  }

  private async getToken() {
    const authOptions = {
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
      },
      data: 'grant_type=client_credentials'
    };

    try {
      const response = await axios(authOptions);
      this.token = response.data.access_token;
    } catch (error) {
      console.error('Error getting token', error);
    }
  }

  public async getAlbum(albumId: string) {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + this.token
      }
    };

    try {
      const response = await axios.get(`https://api.spotify.com/v1/albums/${albumId}`, config);
      return response.data;
    } catch (error) {
      console.error('Error fetching album data', error);
    }
  }
}
