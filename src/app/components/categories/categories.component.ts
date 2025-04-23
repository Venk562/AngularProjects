import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
interface categories {
  id: number;
  title: string;
  image: string;
  route: string;
}
@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  categories: categories[] = [
    {
      id: 1,
      title: 'Attractions',
      image: '/assets/images/Attractions.png',
      route: '/singapore-attractions'
    },
    {
      id: 2,
      title: 'Zoo',
      image: '/assets/images/Zoo.png',
      route: '/singapore-zoo'
    },
    {
      id: 3,
      title: 'Theme Parks',
      image: '/assets/images/Tours.png',
      route: '/singapore-tours'
    },
    {
      id: 4,
      title: 'Museums',
      image: '/assets/images/Museums.png',
      route: '/singapore-museums'
    },
    {
      id: 5,
      title: 'Experiences',
      image: '/assets/images/Experiences.png',
      route: '/singapore-experiences'
    }
  ];

  filteredcategories: categories[] = [];
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.filteredcategories = [...this.categories];

    this.searchService.searchTerm$.subscribe((term) => {
      const lowerTerm = term.toLowerCase();

      this.filteredcategories = this.categories.filter(item =>
        item.title.toLowerCase().includes(lowerTerm)
      );
    });
  }

}
