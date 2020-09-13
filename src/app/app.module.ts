import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ScrollingMenuComponent } from './Components/scrolling-menu/scrolling-menu.component';
import { ContentComponent } from './Components/content/content.component';
import { HomeComponent } from './Pages/home/home.component';
import { NewsApiService } from './Service/newsApiService/news-api.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { SearchComponent } from './Pages/search/search.component';
import { DetailsComponent } from './Pages/details/details.component';
import { ScrollingVerticalComponent } from './Components/scrolling-vertical/scrolling-vertical.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './Components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    FooterComponent,
    NavBarComponent,
    ScrollingMenuComponent,
    ContentComponent,
    HomeComponent,
    SearchBarComponent,
    SearchComponent,
    DetailsComponent,
    ScrollingVerticalComponent,
    LoadingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [NewsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
