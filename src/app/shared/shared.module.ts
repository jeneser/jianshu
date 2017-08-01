import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { AvatarComponent } from './components/avatar/avatar.component';
import { BoardComponent } from './components/board/board.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CollectionComponent } from './components/collection/collection.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { SideToolComponent } from './components/side-tool/side-tool.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';

const SHARED_COMPONENTS = [
  AvatarComponent,
  BoardComponent,
  CarouselComponent,
  CollectionComponent,
  DownloadAppComponent,
  FooterComponent,
  NavBarComponent,
  PlaceholderComponent,
  SideToolComponent,
  ThumbnailComponent
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }
