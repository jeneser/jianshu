import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CollectionComponent } from '../../components/collection/collection.component';
import { BoardComponent } from '../../components/board/board.component';
import { DownloadAppComponent } from '../../components/download-app/download-app.component';
import { ThumbnailComponent } from '../../components/thumbnail/thumbnail.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { SideToolComponent } from '../../components/side-tool/side-tool.component';
import { FooterComponent } from '../../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    CarouselComponent,
    CollectionComponent,
    BoardComponent,
    DownloadAppComponent,
    ThumbnailComponent,
    PlaceholderComponent,
    AvatarComponent,
    SideToolComponent,
    FooterComponent
  ]
})
export class HomeModule { }
