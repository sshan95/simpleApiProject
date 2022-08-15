import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from "../../../assets/mock/mock-api";
import { Album } from "../../../assets/models/api-model";
import { JsonserviceService } from "../../services/jsonservice.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];

  constructor(private apiService: JsonserviceService) { }

  ngOnInit(): void {
    this.apiService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

}
