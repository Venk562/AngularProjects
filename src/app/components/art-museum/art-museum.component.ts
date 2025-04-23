import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';
import { SavedItemsService, RecommendedItem } from '../../services/saved-items.service';
import { SearchService } from '../../services/search.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-art-museum',
  standalone: false,
  templateUrl: './art-museum.component.html',
  styleUrl: './art-museum.component.css'
})
export class ArtMuseumComponent {
  activity = {
    title: 'ArtScience Museum Singapore',
    image: '/assets/images/art-science-museum-singapore-7.avif',
    rating: 4.7,
    reviews: 980,
    booked: 3200,
    location: '6 Bayfront Ave, Marina Bay Sands, Singapore 018974',
    price: 4500
  };

  wishlistService: any;
  savedCount: any;

  constructor(private route: ActivatedRoute, private savedItemsService: SavedItemsService, wishlistService: WishlistService, private searchService: SearchService) { }
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

  highlights = `The ArtScience Museum at Marina Bay Sands is one of Singapore’s most iconic architectural landmarks, renowned for its lotus-inspired design and world-class exhibitions. Seamlessly blending art, science, culture, and technology, the museum hosts immersive, thought-provoking installations from around the globe. Whether it’s interactive digital experiences, futuristic showcases, or collaborations with institutions like the Smithsonian or NASA, the ArtScience Museum offers a captivating journey for visitors of all ages. Nestled along the Marina Bay waterfront, it not only stimulates the mind but also offers breathtaking views of Singapore’s skyline, making it a must-visit destination for both tourists and locals alike.`;


  showFullHighlights = false;
  zoomedImage: string | null = null;
  chunkedItems: any[][] = [];

  toggleTitle() {
    this.showFullHighlights = !this.showFullHighlights;
  }

  get truncatedHighlights(): string {
    return this.showFullHighlights ? this.highlights : this.highlights.slice(0, 500) + '...';
  }
  showAllImages = false;
  skylineluge = [
    {
      image: '/assets/images/art-science-museum-singapore-2.jpg'
    },
    {
      image: '/assets/images/art-science-museum-singapore-3.avif'
    },
    {
      image: '/assets/images/art-science-museum-singapore-6.jpg',
    },
    {
      image: '/assets/images/art-science-museum-singapore-5.avif',
    },
    {
      image: '/assets/images/art-science-museum-singapore-4.webp',
    }
  ];
  displayedImages = this.skylineluge.slice(0, 4);

  toggleViewAll() {
    this.showAllImages = !this.showAllImages;
  }
  showFullTitle: { [key: string]: boolean } = {};
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
