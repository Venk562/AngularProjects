import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';
import { RecommendedItem } from '../../models/recommended-item';

@Component({
  selector: 'app-recommendation-four',
  standalone: false,
  templateUrl: './recommendation-four.component.html',
  styleUrl: './recommendation-four.component.css'
})
export class RecommendationFourComponent {
  activity = {
    title: 'Scare City-A New Immersive Game Experience in Singapore',
    image: '/assets/images/Scare City-A New Immersive Game Experience.jpg',
    rating: 4.8,
    reviews: 1250,
    booked: 5000,
    location: 'National Gallery Singapore, Singapore',
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

  highlights = `Scare City Singapore is an immersive horror-themed experience that pushes the boundaries of fear and thrill. Designed to transport visitors into a world of spine-chilling adventures, this attraction combines haunted houses, interactive horror zones, and eerie storytelling to create a heart-pounding journey through different terrifying scenarios. Whether it's navigating through dark mazes filled with creepy creatures, escaping from zombie-infested areas, or experiencing psychological horror elements, Scare City offers a unique blend of fear and entertainment. Perfect for horror enthusiasts and thrill-seekers, this attraction guarantees an adrenaline rush like no other. With its realistic sets, professional actors, and spine-tingling special effects, Scare City Singapore is a must-visit destination for those who love a good scare!`;

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
      image: '/assets/images/Scare City-A New Immersive Game Experience.jpg'
    },
    {
      image: '/assets/images/Scarce_City_1.avif'
    },
    {
      image: '/assets/images/Scarce_City_3.webp',
    },
    {
      image: '/assets/images/Scarce_City_2.webp',
    },
    {
      image: '/assets/images/Scarce_City_4.webp',
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
    // {
    //   id: 5,
    //   title: 'Scare City - A New Immersive Game Experience',
    //   image: '/assets/images/Adventure Cove Waterpark.jpg',
    //   rating: 5.0,
    //   reviews: 230,
    //   price: 28,
    //   route: '/recommendation-four'
    // }
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
