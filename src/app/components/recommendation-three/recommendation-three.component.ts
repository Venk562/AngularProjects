import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';
import { RecommendedItem } from '../../models/recommended-item';

@Component({
  selector: 'app-recommendation-three',
  standalone: false,
  templateUrl: './recommendation-three.component.html',
  styleUrl: './recommendation-three.component.css'
})
export class RecommendationThreeComponent {
  activity = {
    title: 'Marina Bay Sands Sky Park Singapore',
    image: '/assets/images/Marina Bay Sands Sky Park Observation Deck Tickets-2.jpg',
    rating: 4.8,
    reviews: 1250,
    booked: 5000,
    location: '10 Bayfront Avenue, Hotel, Singapore',
    price: 75.00
  };

  constructor(private route: ActivatedRoute) {}
  dates: { label: string; day: string }[] = [];
   // new code
   filteredRecommendedItems: RecommendedItem[] = [];
   currentId!: number;
   // ends

  ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get('id');
    console.log('Selected Item ID:', itemId);

    this.generateNextDates();

       // new code
       this.route.paramMap.subscribe(params => {
        const idParam = params.get('id');
        this.currentId = idParam ? +idParam : 0;

        this.filteredRecommendedItems = this.recommendedItems.filter(item => item.id !== this.currentId);
      });
      // ends
  }

   generateNextDates(): void {
      const today = new Date();
      for (let i = 0; i < 6; i++) {
        const futureDate = new Date();
        futureDate.setDate(today.getDate() + i);

        this.dates.push({
          label: i === 0 ? 'Today' : format(futureDate, 'EEE'),
          day: format(futureDate, 'dd MMM')
        });
      }
    }

    highlights = `The Marina Bay Sands SkyPark, located on Tower 3, offers a stunning observation deck with breathtaking panoramic views of the Singapore skyline, Gardens by the Bay, and the shimmering sea — especially magical at sunset or when the city lights up at night. While the world’s largest rooftop infinity pool is exclusive to hotel guests, anyone can enjoy the incredible atmosphere from the SkyPark or indulge in rooftop dining. CE LA VI delivers a vibrant mix of Asian fusion cuisine and cocktails, while Spago by Wolfgang Puck offers a more upscale experience with equally spectacular views, making the SkyPark a must-visit destination in Singapore.`;

  showFullHighlights = false;

  toggleTitle() {
    this.showFullHighlights = !this.showFullHighlights;
  }

  get truncatedHighlights(): string {
    return this.showFullHighlights ? this.highlights : this.highlights.slice(0, 250) + '...';
  }
  showAllImages = false;
  skylineluge = [
    {
      image: '/assets/images/Marina Bay Sands Sky Park Observation Deck Tickets-2.jpg'
    },
    {
      image: '/assets/images/Marina Bay Sands Sky Park 1.jpg'
    },
    {
      image: '/assets/images/Marina Bay Sands Sky Park 2.jpg',
    },
    {
      image: '/assets/images/Marina Bay Sands Sky Park 3.jpg',
    },
    {
      image: '/assets/images/Marina Bay Sands Sky Park 4.jpg',
    }
  ];
  displayedImages = this.skylineluge.slice(0, 4);

  toggleViewAll() {
    this.showAllImages = !this.showAllImages;
  }

  recommendedItems: RecommendedItem[] = [
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
      title: 'Scare City - A New Immersive Game Experience',
      image: '/assets/images/Scare City-A New Immersive Game Experience.jpg',
      rating: 5.0,
      reviews: 230,
      price: 28,
      route: '/recommendation-four'
    }
  ];

  chunkedRecommendedItems() {
    const chunkSize = 4;
    let result = [];
    for (let i = 0; i < this.recommendedItems.length; i += chunkSize) {
      result.push(this.recommendedItems.slice(i, i + chunkSize));
    }
    return result;
  }
}
