import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecommendedItem } from '../../models/recommended-item';
import { format } from 'date-fns';
import { SavedItemsService } from '../../services/saved-items.service';
import { SearchService } from '../../services/search.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-popular-things-five',
  standalone: false,
  templateUrl: './popular-things-five.component.html',
  styleUrl: './popular-things-five.component.css'
})
export class PopularThingsFiveComponent {
  activity = {
    title: 'Cable Car Singapore Tickets',
    image: '/assets/images/cable-car-sky-1.jpg',
    rating: 4.6,
    reviews: 1250,
    booked: 5000,
    location: '109 Mount Faber Road Singapore',
    price: 2926
  };
  wishlistService: any;
  savedCount: any;

  constructor(private route: ActivatedRoute,private savedItemsService: SavedItemsService,wishlistService: WishlistService, private searchService: SearchService) { }
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

      // this.chunkItems();
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

  highlights = `The Singapore Cable Car offers a one-of-a-kind aerial journey that connects Mount Faber to Sentosa Island, providing stunning panoramic views of the city skyline, harbor, and lush greenery. It features two main lines—the Mount Faber Line and the Sentosa Line—both offering scenic routes with stops at key attractions like Merlion Station and Siloso Point. One of the highlights is the SkyOrb Cabin, a glass-bottomed gondola that gives passengers an exhilarating view straight below their feet. Special themed cabins, such as the recent Pokémon-themed rides, add an extra layer of fun, especially for families. Whether you're heading to Sentosa or just looking for a beautiful way to explore the city, the cable car ride is a relaxing and unforgettable experience. The main boarding points are at 109 Mount Faber Road and 50 Imbiah Road, Sentosa, making it easily accessible from both the mainland and the island.`;


  showFullHighlights = false;
  zoomedImage: string | null = null;
  chunkedItems: any[][] = [];
  showFullTitle: { [key: string]: boolean } = {};
  toggleTitle() {
    this.showFullHighlights = !this.showFullHighlights;
  }

  get truncatedHighlights(): string {
    return this.showFullHighlights ? this.highlights : this.highlights.slice(0, 500) + '...';
  }
  showAllImages = false;
  skylineluge = [
    {
      image: '/assets/images/cable-car-sky-2.jpg'
    },
    {
      image: '/assets/images/cable-car-sky-3.jpg'
    },
    {
      image: '/assets/images/cable-car-sky-4.jpg',
    },
    {
      image: '/assets/images/cable-car-sky-5.webp',
    },
    {
      image: '/assets/images/cable-car-sky-6.jpg',
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
    // Toggle the showFullTitle flag for the clicked item
    this.showFullTitle[title] = !this.showFullTitle[title];
  }
}
