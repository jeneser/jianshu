import { Component, OnInit } from '@angular/core';

import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CollectionComponent } from '../../components/collection/collection.component';
import { BoardComponent } from '../../components/board/board.component';
import { DownloadAppComponent } from '../../components/download-app/download-app.component';
import { ThumbnailComponent } from '../../components/thumbnail/thumbnail.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
