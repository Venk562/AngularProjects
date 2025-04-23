import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit,OnDestroy  {
  // searchQuery: string = '';

  // constructor(private router: Router,private searchService: SearchService) {}

  // onSearch() {
  //   this.searchService.setSearchTerm(this.searchQuery);
  // }
  searchQuery: string = '';
  private subscription!: Subscription;

  constructor(private router: Router, private searchService: SearchService) {}

  ngOnInit(): void {
    this.subscription = this.searchService.searchTerm$.subscribe(term => {
      this.searchQuery = term;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSearch() {
    this.searchService.setSearchTerm(this.searchQuery);
  }
}
