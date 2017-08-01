import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Home routing
import { HomeRoutingModule } from './home-routing.module';
// Shared module
import { SharedModule } from '../../shared/shared.module';

// Components
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
