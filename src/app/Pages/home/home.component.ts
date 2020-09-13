import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/Service/newsApiService/news-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private newsProvider: NewsApiService,
    private route: ActivatedRoute
  ) {}
  generals: any[] = [];
  title = 'Generales';
  isLoading: boolean;

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe((params) => {
      console.log(params);
      params.category
        ? this.newsProvider
            .getNewsByCategory(params.category)
            .subscribe((data: any) => {
              this.generals = data.articles;
              this.title = params.category;
              this.isLoading = false;
            })
        : this.newsProvider.getGeneralNews().subscribe((data: any) => {
            this.generals = data.articles;
            this.isLoading = false;
          });
    });
  }
}
