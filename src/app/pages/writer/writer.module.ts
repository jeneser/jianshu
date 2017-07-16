import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriterRoutingModule } from './writer-routing.module';
import { WriterComponent } from './writer.component';

@NgModule({
  imports: [
    CommonModule,
    WriterRoutingModule
  ],
  declarations: [WriterComponent]
})
export class WriterModule { }
