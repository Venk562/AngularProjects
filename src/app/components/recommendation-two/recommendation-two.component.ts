import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';
import { RecommendedItem } from '../../models/recommended-item';

@Component({
  selector: 'app-recommendation-two',
  standalone: false,
  templateUrl: './recommendation-two.component.html',
  styleUrl: './recommendation-two.component.css'
})
export class RecommendationTwoComponent {

  activity = {
    title: 'Singapore Flyer Tickets',
    image: '/assets/images/Singapore Flyer Tickets.jpg',
    rating: 4.8,
    reviews: 1250,
    booked: 5000,
    location: '30 Raffles Avenue, Singapore',
    price: 75.00
  };

  constructor(private route: ActivatedRoute) { }
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

  highlights = `The Singapore Flyer is a giant observation wheel located in the Downtown Core district of Singapore. It officially opened on 15 April 2008 and features 28 air-conditioned capsules, each able to carry 28 passengers. The Flyer is attached to a three-story terminal building and has often appeared in media and pop culture related to Singapore.

  Standing at 165 meters (541 feet) tall, it was the tallest Ferris wheel in the world when it was completed. However, it was later overtaken in 2014 by the High Roller in Las Vegas, USA, which stands at 167.6 meters (550 feet) — just 2.6 meters (9 feet) taller than the Singapore Flyer.`;

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
      image: '/assets/images/Singapore Flyer Tickets One.jpg'
    },
    {
      image: '/assets/images/Singapore Flyer Tickets Two.jpg'
    },
    {
      image: '/assets/images/Singapore Flyer Tickets Three.jpg',
    },
    {
      image: '/assets/images/Singapore Flyer Tickets Five.jpg',
    },
    {
      image: '/assets/images/Singapore Flyer Tickets.jpg',
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
