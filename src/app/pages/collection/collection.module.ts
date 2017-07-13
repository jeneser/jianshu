import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './collection.component';
import { ThumbnailComponent } from '../../components/thumbnail/thumbnail.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';

@NgModule({
  imports: [
    CommonModule,
    CollectionRoutingModule
  ],
  declarations: [
    CollectionComponent,
    ThumbnailComponent,
    PlaceholderComponent,
    AvatarComponent
  ]
})
export class CollectionModule { }
