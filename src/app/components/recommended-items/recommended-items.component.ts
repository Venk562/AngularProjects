import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended-items',
  standalone: false,
  templateUrl: './recommended-items.component.html',
  styleUrl: './recommended-items.component.css'
})
export class RecommendedItemsComponent implements OnInit {
  showFullTitle: { [key: string]: boolean } = {};
  recommendedItems = [
    {
      id: 1,
      title: 'Skyline Luge Sentosa Tickets',
      image: '/assets/images/Skyline Luge Sentosa Tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 25,
      route: '/recommendation-one'
    },
    {
      id: 2,
      title: 'Singapore Flyer Tickets',
      image: '/assets/images/Singapore Flyer Tickets.jpg',
      rating: 4.7,
      reviews: 295,
      price: 38.29,
      route: '/recommendation-two'
    },
    {
      id: 3,
      title: 'Marina Bay Sands Sky Park',
      image: '/assets/images/Marina Bay Sands Sky Park Observation Deck Tickets.jpg',
      rating: 4.2,
      reviews: 581,
      price: 35,
      route: '/recommendation-three'
    },
    {
      id: 4,
      title: 'Scare City - A New Immersive Game Experience',
      image: '/assets/images/Scare City-A New Immersive Game Experience.jpg',
      rating: 5.0,
      reviews: 230,
      price: 28,
      route: '/recommendation-four'
    },
    {
      id: 5,
      title: 'Gardens by the Bay Entry Tickets',
      image: '/assets/images/Gardens-by-the-Bay-4.jpeg',
      rating: 4.8,
      reviews: 430,
      price: 32,
      route: '/recommendation-five'
    }


  ];

  ngOnInit(): void {}

  // chunkedRecommendedItems() {
  //   const chunkSize = 4;
  //   let result = [];
  //   for (let i = 0; i < this.recommendedItems.length; i += chunkSize) {
  //     result.push(this.recommendedItems.slice(i, i + chunkSize));
  //   }
  //   return result;
  // }

  // chunkedRecommendedItems() {
  //   const chunkSize = 4;
  //   const items = this.recommendedItems;
  //   const result: { id: number; title: string; image: string; rating: number; reviews: number; price: number; route: string; }[][] = [];

  //   if (!items) return result;

  //   // Make overlapping groups of 4
  //   for (let i = 0; i <= items.length - chunkSize; i++) {
  //     result.push(items.slice(i, i + chunkSize));
  //   }

  //   return result;
  // }

  chunkedRecommendedItems() {
    const chunkSize = 4;
    const result = [];
    const total = this.recommendedItems.length;

    let i = 0;
    while (i < total) {
      const chunk = [];

      for (let j = 0; j < chunkSize; j++) {
        chunk.push(this.recommendedItems[(i + j) % total]);
      }

      result.push(chunk);
      i += chunkSize;
    }

    return result;
  }



  toggleTitle(title: string) {
     this.showFullTitle[title] = !this.showFullTitle[title];
  }
  }
