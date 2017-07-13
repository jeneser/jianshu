import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationComponent } from './recommendation.component';
import { CollectionComponent } from './collection/collection.component';

const routes: Routes = [
  {
    path: 'users',
    component: CollectionComponent
  },
  {
    path: ':id',
    component: RecommendationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendationRoutingModule { }
