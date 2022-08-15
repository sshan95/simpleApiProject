import { Component, OnInit, Input } from '@angular/core';
import { Album } from "../../../assets/models/api-model";
import { JsonserviceService } from "../../services/jsonservice.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input()
  album!: Album;
  url!: string;

  redirectedUrl!: string;


  constructor() { }

  ngOnInit(): void {
  }

  redirectToUrl(el:any) {
    let dataUrl = el.getAttribute('data-album-url');
    this.url = dataUrl;
    this.redirectedUrl = this.url;
    window.open(this.redirectedUrl, '_blank')
  }

}
