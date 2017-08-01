import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages routing
import { PagesRoutingModule } from './pages-routing.module';
// Shared module
import { SharedModule } from '../shared/shared.module';

// Components
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule { }
