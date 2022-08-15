import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../assets/models/api-model'

@Injectable({
  providedIn: 'root'
})
export class JsonserviceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }
}
