import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteComponent } from './note.component';

const routes: Routes = [
  {
    path: '',
    component: NoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteRoutingModule { }
