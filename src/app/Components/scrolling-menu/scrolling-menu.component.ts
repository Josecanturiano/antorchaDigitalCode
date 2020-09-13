import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling-menu',
  templateUrl: './scrolling-menu.component.html',
  styleUrls: ['./scrolling-menu.component.css'],
})
export class ScrollingMenuComponent implements OnInit {
  constructor() {}

  category: string[] = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology',
  ];

  categoryView: string[] = [
    'general',
    'negocios',
    'entretenimiento',
    'salud',
    'ciencia',
    'sports',
    'tecnologia',
  ];

  ngOnInit(): void {}
}
