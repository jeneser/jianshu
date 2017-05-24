import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CollectionComponent } from './components/collection/collection.component';
import { BoardComponent } from './components/board/board.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SideToolComponent } from './components/side-tool/side-tool.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
