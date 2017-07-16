import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WriterComponent } from './writer.component';

const routes: Routes = [
  {
    path: '',
    component: WriterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriterRoutingModule { }
