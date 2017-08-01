import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Recommendation routing
import { RecommendationRoutingModule } from './recommendation-routing.module';
// Shared module
import { SharedModule } from '../../shared/shared.module';

// Components
import { RecommendationComponent } from './recommendation.component';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RecommendationRoutingModule
  ],
  declarations: [
    RecommendationComponent,
    CollectionComponent
  ]
})
export class RecommendationModule { }
