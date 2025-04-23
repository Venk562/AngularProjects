import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';
import { RecommendedItem } from '../../models/recommended-item';
import { SavedItemsService } from '../../services/saved-items.service';
import { WishlistService } from '../../services/wishlist.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-recommendation-two',
  standalone: false,
  templateUrl: './recommendation-two.component.html',
  styleUrl: './recommendation-two.component.css'
})
export class RecommendationTwoComponent {

  activity = {
    title: 'Singapore Flyer Tickets',
    image: '/assets/images/flyer.avif',
    rating: 4.8,
    reviews: 1250,
    booked: 5000,
    location: '30 Raffles Avenue, Singapore',
    price: 2756
  };
  wishlistService: any;
  savedCount: any;

  constructor(private route: ActivatedRoute,private savedItemsService: SavedItemsService,wishlistService: WishlistService, private searchService: SearchService) { }
  dates: { label: string; day: string }[] = [];
  selectedDate: Date = new Date();

   // new code
   filteredRecommendedItems: RecommendedItem[] = [];
   currentId!: number;
   id!:string;
   // ends
  // ngOnInit() {
  //   const itemId = this.route.snapshot.paramMap.get('id');
  //   console.log('Selected Item ID:', itemId);

  //   this.generateNextDates();

  //      // new code
  //      this.route.paramMap.subscribe(params => {
  //       const idParam = params.get('id');
  //       this.currentId = idParam ? +idParam : 0;

  //       this.filteredRecommendedItems = this.recommendedItems.filter(item => item.id !== this.currentId);
  //     });
  //     // ends
  // }

  ngOnInit() {
    // Extract the ID from route once
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam || '';
      this.currentId = idParam ? +idParam : 0;

      console.log('Selected Item ID:', this.id);

      // Filter out the current item from the list
      this.filteredRecommendedItems = this.recommendedItems.filter(item => item.id !== this.currentId);
    });

    // Generate dates (if this doesn't rely on `id`, it's safe here)
    this.generateNextDates(this.selectedDate);


  }



  generateNextDates(selectedDate: Date): void {
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
  zoomedImage: string | null = null;
  toggleTitle() {
    this.showFullHighlights = !this.showFullHighlights;
  }

  showFullTitle: { [key: string]: boolean } = {};

  get truncatedHighlights(): string {
    return this.showFullHighlights ? this.highlights : this.highlights.slice(0, 500) + '...';
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
      price: 2088,
      route: '/recommendation-one'
    },
    {
      id: 2,
      title: 'Singapore Flyer Tickets',
      image: '/assets/images/Singapore Flyer Tickets.jpg',
      rating: 4.7,
      reviews: 295,
      price: 2756,
      route: '/recommendation-two'
    },
    {
      id: 3,
      title: 'Marina Bay Sands Sky Park',
      image: '/assets/images/Marina Bay Sands Sky Park Observation Deck Tickets.jpg',
      rating: 4.2,
      reviews: 581,
      price: 2174,
      route: '/recommendation-three'
    },
    {
      id: 4,
      title: 'Scare City - A New Immersive Game Experience',
      image: '/assets/images/Scare City-A New Immersive Game Experience.jpg',
      rating: 5.0,
      reviews: 230,
      price: 2505,
      route: '/recommendation-four'
    },
    {
      id: 5,
      title: 'Universal Studios Singapore',
      image: '/assets/images/Universal Studios Singapore.jpg',
      rating: 4.6,
      reviews: 224,
      price: 6933,
      route: '/popular-things-one'
    },
    {
      id: 6,
      title: 'Gardens By The Bay Tickets',
      image: '/assets/images/Gaderns By The Bay Tickets.jpg',
      rating: 4.7,
      reviews: 295,
      price: 2338,
      route: '/popular-things-two'
    },
    {
      id: 7,
      title: 'Harry Potter: Visions of Magic Tickets',
      image: '/assets/images/harry potter visions of magic.jpg',
      rating: 4.2,
      reviews: 581,
      price: 3258,
      route: '/popular-things-three'
    },
    {
      id: 8,
      title: 'Night Safari Tickets',
      image: '/assets/images/night safari tickets.jpg',
      rating: 5.0,
      reviews: 230,
      price: 4593,
      route: '/popular-things-four'
    },
    {
      id: 9,
      title: 'Cable Car Singapore Tickets',
      image: '/assets/images/cabel car singapore tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 2926,
      route: '/popular-things-five'
    },
    {
      id: 10,
      title: 'S.E.A Aquarium Tickets',
      image: '/assets/images/SEA Aquarium Tickets.png',
      rating: 4.7,
      reviews: 295,
      price: 3426,
      route: '/popular-things-six'
    },
    {
      id: 11,
      title: 'Singapore Zoo Admission Tickets',
      image: '/assets/images/Singapore Zoo Admission Tickets.jpg',
      rating: 4.2,
      reviews: 581,
      price: 4008,
      route: '/popular-things-seven'
    },
    {
      id: 12,
      title: 'River Wonders Tickets',
      image: '/assets/images/River Wonders Tickets.jpg',
      rating: 4.7,
      reviews: 295,
      price: 3507,
      route: '/popular-things-eight'
    },
    {
      id: 13,
      title: 'Bird Paradise Tickets',
      image: '/assets/images/Bird Paradise Tickets.jpg',
      rating: 4.2,
      reviews: 581,
      price: 3173,
      route: '/popular-things-nine'
    },
    {
      id: 14,
      title: 'Mandai Rainforest Wild Asia Tickets',
      image: '/assets/images/Manadi Rain Forest Wild Asia Tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 3757,
      route: '/popular-things-ten'
    }
  ];

  chunkedRecommendedItems() {
    const chunkSize = 4;
    const result = [];
    const total = this.filteredRecommendedItems.length;

    let i = 0;
    while (i < total) {
      const chunk = [];

      for (let j = 0; j < chunkSize; j++) {
        const index = (i + j) % total;
        chunk.push(this.filteredRecommendedItems[index]);
      }

      result.push(chunk);
      i += chunkSize;
    }

    return result;
  }

  saveCard(card: any) {
    this.wishlistService.addCard(card);
    this.savedCount = this.wishlistService.getSavedCards().length;
  }

  toggleSave(item: any): void {
    this.savedItemsService.toggleItem(item);
  }



  onBookmarkClick(event: MouseEvent, item: any): void {
    event.stopPropagation();
    event.preventDefault();
    this.toggleSave(item);
    this.savedCount = this.savedItemsService.getSavedItems().length;

  }






  isItemSaved(item: RecommendedItem): boolean {

    return this.savedItemsService.isItemSaved(item);
  }



  openImage(imageUrl: string) {
    this.zoomedImage = imageUrl;
  }

  closeImage() {
    this.zoomedImage = null;
  }

  toggleTitleCard(title: string) {

    this.showFullTitle[title] = !this.showFullTitle[title];
  }
}
