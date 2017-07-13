import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendationRoutingModule } from './recommendation-routing.module';
import { RecommendationComponent } from './recommendation.component';
import { ThumbnailComponent } from '../../components/thumbnail/thumbnail.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  imports: [
    CommonModule,
    RecommendationRoutingModule
  ],
  declarations: [
    RecommendationComponent,
    ThumbnailComponent,
    PlaceholderComponent,
    AvatarComponent,
    CollectionComponent
  ]
})
export class RecommendationModule { }
