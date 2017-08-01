import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Collection routing
import { CollectionRoutingModule } from './collection-routing.module';
// Shared module
import { SharedModule } from '../../shared/shared.module';

// Components
import { CollectionComponent } from './collection.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CollectionRoutingModule
  ],
  declarations: [
    CollectionComponent
  ]
})
export class CollectionModule { }
