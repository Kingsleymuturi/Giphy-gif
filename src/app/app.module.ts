import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { StickersComponent } from './stickers/stickers.component';
import { GiphyService }from './giphy-http/giphy-request.service';
import { StickerService } from './sticker-service/stickerservice.service';

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent,
    NotFoundComponent,
    AboutComponent,
    NavbarComponent,
    SearchComponent,
    StickersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [GiphyService,StickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
