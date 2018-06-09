import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { QueryComponent } from './query/query.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { SettingsComponent } from './settings/settings.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ServiceComponent } from './service/service.component';
import { MainFrameComponent } from './main-frame/main-frame.component';

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
    ServiceComponent,
    MainFrameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
