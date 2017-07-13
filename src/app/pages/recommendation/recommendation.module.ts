import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendationRoutingModule } from './recommendation-routing.module';
import { RecommendationComponent } from './recommendation.component';

@NgModule({
  imports: [
    CommonModule,
    RecommendationRoutingModule
  ],
  declarations: [RecommendationComponent]
})
export class RecommendationModule { }
