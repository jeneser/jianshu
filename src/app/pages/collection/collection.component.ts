import { Component, OnInit } from '@angular/core';

import { ThumbnailComponent } from '../../components/thumbnail/thumbnail.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
