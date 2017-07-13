import { Component, OnInit } from '@angular/core';

import { ThumbnailComponent } from '../../components/thumbnail/thumbnail.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
