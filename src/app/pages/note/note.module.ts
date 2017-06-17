import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';

import { NoteComponent } from './note.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { SideToolComponent } from '../../components/side-tool/side-tool.component';

@NgModule({
  imports: [
    CommonModule,
    NoteRoutingModule
  ],
  declarations: [
    NoteComponent,
    AvatarComponent,
    SideToolComponent
  ]
})
export class NoteModule { }
