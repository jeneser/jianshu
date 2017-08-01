import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// User routing
import { UserRoutingModule } from './user-routing.module';
// Shared module
import { SharedModule } from '../../shared/shared.module';

// Components
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent
  ]
})
export class UserModule { }
