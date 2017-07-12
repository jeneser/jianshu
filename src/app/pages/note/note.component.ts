import { Component, OnInit } from '@angular/core';

import { CollectionComponent } from '../../components/collection/collection.component';
import { ThumbnailComponent } from '../../components/thumbnail/thumbnail.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
