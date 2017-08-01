import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Note routing
import { NoteRoutingModule } from './note-routing.module';
// Shared module
import { SharedModule } from '../../shared/shared.module';

// Components
import { NoteComponent } from './note.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NoteRoutingModule
  ],
  declarations: [
    NoteComponent
  ]
})
export class NoteModule { }
