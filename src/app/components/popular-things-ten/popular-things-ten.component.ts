import { Component } from '@angular/core';
import { RecommendedItem } from '../../models/recommended-item';
import { format } from 'date-fns';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-popular-things-ten',
  standalone: false,
  templateUrl: './popular-things-ten.component.html',
  styleUrl: './popular-things-ten.component.css'












  
})
export class PopularThingsTenComponent {
  activity = {
    title: 'Cable Car Singapore Tickets',
    image: '/assets/images/Manadi Rain Forest-1.jpg',
    rating: 4.8,
    reviews: 1250,
    booked: 5000,
    location: 'Mandai Lake Road, Singapore',
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

  highlights = `The Mandai Wildlife Reserve is situated in the northern region of Singapore, adjacent to the Upper Seletar Reservoir.
                This expansive nature and wildlife destination encompasses several renowned attractions, including the Singapore Zoo, Night Safari, River Wonders, Bird Paradise, and Rainforest Wild ASIA.`;


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
      image: '/assets/images/Manadi Rain Forest-2.jpeg'
    },
    {
      image: '/assets/images/Manadi Rain Forest-3.jpg'
    },
    {
      image: '/assets/images/Manadi Rain Forest-7.jpg',
    },
    {
      image: '/assets/images/Manadi Rain Forest-5.avif',
    },
    {
      image: '/assets/images/Manadi Rain Forest-6.webp',
    }
  ];
  displayedImages = this.skylineluge.slice(0, 4);

  toggleViewAll() {
    this.showAllImages = !this.showAllImages;
  }

  recommendedItems: RecommendedItem[] = [
    {
      id:1,
      title: 'Universal Studios Singapore',
      image: '/assets/images/Universal Studios Singapore.jpg',
      rating: 4.6,
      reviews: 224,
      price: 25,
      route:'/popular-things-one'

    },
    {
      id:2,
      title: 'Gardens By The Bay Tickets',
      image: '/assets/images/Gaderns By The Bay Tickets.jpg',
      rating: 4.7,
      reviews: 295,
      price: 38.29,
       route:'/popular-things-two'
    },
    {
      id:3,
      title: 'Harry Poter vissions Of Magic Tickets',
      image: '/assets/images/harry potter visions of magic.jpg',
      rating: 4.2,
      reviews: 581,
      price: 35,
      route:'/popular-things-three'
    },
    {
      id:4,
      title: 'Night Safari Tickets',
      image: '/assets/images/night safari tickets.jpg',
      rating: 5.0,
      reviews: 230,
      price: 28,
      route:'/popular-things-four'
    },

    {
      id:1,
      title: 'Cable Car Singapore Tickets',
      image: '/assets/images/cabel car singapore tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 25,
      route:'/popular-things-five'
    },
    {
      id:2,
      title: 'S.E.A Aquarium Tickets',
      image: '/assets/images/SEA Aquarium Tickets.png',
      rating: 4.7,
      reviews: 295,
      price: 38.29,
      route:'/popular-things-six'
    },
    {
      id:3,
      title: 'Singapore Zoo Admission Tickets',
      image: '/assets/images/Singapore Zoo Admission Tickets.jpg',
      rating: 4.2,
      reviews: 581,
      price: 35,
        route:'/popular-things-seven'
    },
    {
      id:1,
      title: 'Skyline Luge Sentosa Tickets',
      image: '/assets/images/Skyline Luge Sentosa Tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 25,
      route:'/recommendation-one/'
    },


    {
      id:3,
      title: 'Marina Bay Sand Sky Park Observation Deck Tickets',
      image: '/assets/images/Marina Bay Sands Sky Park Observation Deck Tickets-2.jpg',
      rating: 4.6,
      reviews: 224,
      price: 25,
      route:'/recommendation-three/'
    },
    {
      id:2,
      title: 'River Wonders Tickets',
      image: '/assets/images/River Wonders Tickets.jpg',
      rating: 4.7,
      reviews: 295,
      price: 38.29,
      route:'/popular-things-eight/'
    },
    {
      id:3,
      title: 'Bird Paradise Tickets',
      image: '/assets/images/Bird Paradise Tickets.jpg',
      rating: 4.2,
      reviews: 581,
      price: 35,
       route:'/popular-things-nine/'
    },
    {
      id:4,
      title: 'Manadi Rain Forest Wild Asia Tickets',
      image: '/assets/images/Manadi Rain Forest Wild Asia Tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 25,
       route:'/popular-things-ten/'
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
