import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  private apiKey = 'd0ea3b4d90534ffdb9e851c54c9788af';

  constructor(private http: HttpClient) {}

  getGeneralNews() {
    return this.http.get(
      `http://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${this.apiKey}`
    );
  }

  getNewsByCategory(category: string) {
    console.log(
      `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${this.apiKey}`
    );
    return this.http.get(
      `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${this.apiKey}`
    );
  }

  getNewsBySearch(param: string) {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?q=${param}&apiKey=${this.apiKey}`
    );
  }
}
