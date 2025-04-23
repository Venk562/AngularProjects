import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

interface ExploreItems {
  id: number;
  title: string;
  image: string;
  location: string;
  route: string;
}

@Component({
  selector: 'app-explore-destinations',
  standalone: false,
  templateUrl: './explore-destinations.component.html',
  styleUrl: './explore-destinations.component.css'
})
export class ExploreDestinationsComponent implements OnInit {
  ExploreItems: ExploreItems[] = [
    {
      id: 1,
      title: 'Singapore',
      image: '/assets/images/HydroDash.png',
      location: 'Singapore',
      route: '/explore-singapore'
    },
    {
      id: 2,
      title: 'Thailand',
      image: '/assets/images/Thailand-img-1.jpg',
      location: 'Thailand',
      route: '/explore-Thailand'

    },
    {
      id: 3,
      title: 'Malaysia',
      image: '/assets/images/Malaysia-1.jpg',
      location: 'Malaysia',
      route: '/explore-Malaysia'
    },
    {
      id: 4,
      title: 'Dubai',
      image: '/assets/images/dubai-img.jpg',
      location: 'Dubai',
      route: '/explore-Dubai'
    },
    {
      id: 5,
      title: 'Sri Lanka',
      image: '/assets/images/srilanka-6.jpg',
      location: 'Sri Lanka',
      route: '/explore-sriLanka'
    }
  ];
  filteredExploreItems: ExploreItems[] = [];
  constructor(private searchService: SearchService) { }
  ngOnInit(): void {
    this.filteredExploreItems = [...this.ExploreItems];

    this.searchService.searchTerm$.subscribe((term) => {
      const lowerTerm = term.toLowerCase();

      this.filteredExploreItems = this.ExploreItems.filter(item =>
        item.title.toLowerCase().includes(lowerTerm)
      );
    });
  }
}

