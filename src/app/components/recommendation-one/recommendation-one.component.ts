import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';
import { RecommendedItem } from '../../models/recommended-item';
@Component({
  selector: 'app-recommendation-one',
  standalone: false,
  templateUrl: './recommendation-one.component.html',
  styleUrl: './recommendation-one.component.css'
})
export class RecommendationOneComponent implements OnInit {
  activity = {
    title: 'Universal Studios Singapore',
    image: '/assets/images/Skyline Luge Sentosa Tickets.jpg',
    rating: 4.8,
    reviews: 1250,
    booked: 5000,
    location: 'Sentosa, Singapore',
    price: 75.00
  };

  constructor(private route: ActivatedRoute) { }

  dates: { label: string; day: string }[] = [];
  selectedDate: Date = new Date();

   // new code
   filteredRecommendedItems: RecommendedItem[] = [];
   currentId!: number;
   // ends
  ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get('id');
    console.log('Selected Item ID:', itemId);

    this.generateNextDates(this.selectedDate);

       // new code
       this.route.paramMap.subscribe(params => {
        const idParam = params.get('id');
        this.currentId = idParam ? +idParam : 0;

        this.filteredRecommendedItems = this.recommendedItems.filter(item => item.id !== this.currentId);
      });
      // ends
  }
  generateNextDates(startDate: Date): void {
    this.dates = [];
    for (let i = 0; i < 6; i++) {
      const futureDate = new Date(startDate);
      futureDate.setDate(startDate.getDate() + i);

      this.dates.push({
        label: i === 0 ? 'Today' : format(futureDate, 'EEE'),
        day: format(futureDate, 'dd MMM')
      });
    }
  }

  onDateChange(event: Date): void {
    if (event) {
      this.selectedDate = event;
      this.generateNextDates(this.selectedDate);
    }
  }


  highlights = `We’re on a mission to deliver real fun to global communities. We offer a diverse range of international products taking advantage of an unlimited energy resource; Gravity.

  The world-famous Skyline Luge was invented in 1985 in Rotorua, New Zealand. The accessible and thrilling ride quickly became a local icon, and a popular ‘thing to do’ for families in New Zealand. Today, over 90 million Luge rides have been enjoyed by people of all ages and abilities.

  Skyline operates sites in New Zealand, Canada, South Korea, Singapore, Malaysia, with more to come. We can’t wait to share more real fun with the world!

  We’re brave, we care and we do everything we can to bring real fun to the world and make people smile. Our values continue to guide us to deliver the world-class guest experience we’re known for, making Skyline a great place to work and visit.
  `;

  showFullHighlights = false;
  zoomedImage: string | null = null;
  toggleTitle() {
    this.showFullHighlights = !this.showFullHighlights;
  }

  get truncatedHighlights(): string {
    return this.showFullHighlights ? this.highlights : this.highlights.slice(0, 250) + '...';
  }
  showAllImages = false;
  skylineluge = [
    {
      image: '/assets/images/Skyline Luge Sentosa Tickets gal-1.jpg'
    },
    {
      image: '/assets/images/Skyline Luge Sentosa Tickets gal-2.jpg'
    },
    {
      image: '/assets/images/Skyline Luge Sentosa Tickets gal-3.jpg',
    },
    {
      image: '/assets/images/Skyline Luge Sentosa Tickets gal-4.jpeg',
    },
    {
      image: '/assets/images/Singapore Flyer Tickets.jpg',
    }
  ];
  displayedImages = this.skylineluge.slice(0, 4);

  toggleViewAll() {
    this.showAllImages = !this.showAllImages;
  }

 recommendedItems: RecommendedItem[]= [
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
    },
    
  ];

  chunkedRecommendedItems() {
    const chunkSize = 4;
    let result = [];
    for (let i = 0; i < this.recommendedItems.length; i += chunkSize) {
      result.push(this.recommendedItems.slice(i, i + chunkSize));
    }
    return result;
  }

  openImage(imageUrl: string) {
    this.zoomedImage = imageUrl;
  }

  closeImage() {
    this.zoomedImage = null;
  }
}

