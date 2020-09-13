import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  constructor(private route: Router) {}

  param: string;

  search(forma: NgForm) {
    this.route.navigate(['/search', forma.value.search]);
  }

  ngOnInit(): void {}
}
