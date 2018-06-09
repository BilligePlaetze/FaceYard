import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from "angular2-materialize"; 
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { QueryComponent } from './query/query.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { SettingsComponent } from './settings/settings.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { MainFrameComponent } from './main-frame/main-frame.component';

import { PostServiceService } from './services/post-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    CreatePostComponent,
    QueryComponent,
    NewsFeedComponent,
    SettingsComponent,
    TutorialComponent,
    MainFrameComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule, 
    HttpModule
  ],
  providers: [
    PostServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
