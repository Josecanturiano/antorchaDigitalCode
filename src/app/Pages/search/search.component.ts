import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsApiService } from '../../Service/newsApiService/news-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private provider: NewsApiService
  ) {}

  data: any = null;
  param: string;
  isLoading: boolean;

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe((params) => {
      this.provider.getNewsBySearch(params.query).subscribe((data: any) => {
        this.data = data.articles;
        this.param = 'Resultados para: ' + params.query;
        this.isLoading = false;
      });
    });
  }
}
