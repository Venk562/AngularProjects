import { Component, OnInit } from '@angular/core';
import { RecommendedItem } from '../../models/recommended-item';
import { SavedItemsService } from '../../services/saved-items.service';
import { WishlistService } from '../../services/wishlist.service';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-recommended-items',
  standalone: false,
  templateUrl: './recommended-items.component.html',
  styleUrl: './recommended-items.component.css'
})
export class RecommendedItemsComponent implements OnInit {
  showFullTitle: { [key: string]: boolean } = {};
  recommendedItems:RecommendedItem[] = [
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
  wishlistService: any;
  savedCount: any;
  filteredRecommendedItems: RecommendedItem[] = [];
  constructor(private savedItemsService: SavedItemsService,wishlistService: WishlistService, private searchService: SearchService) { }



  saveCard(card: any) {
    this.wishlistService.addCard(card);
    this.savedCount = this.wishlistService.getSavedCards().length;
  }

  toggleSave(item: any): void {
    this.savedItemsService.toggleItem(item);
  }

  // onBookmarkClick(event: MouseEvent, item: any): void {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   this.toggleSave(item);
  // }

  onBookmarkClick(event: MouseEvent, item: any): void {
    event.stopPropagation();
    event.preventDefault();
    this.toggleSave(item);
    this.savedCount = this.savedItemsService.getSavedItems().length;

  }


  // stopCarouselDrag(event: Event) {
  //   event.stopPropagation();
  // }



  isItemSaved(item: RecommendedItem): boolean {

    return this.savedItemsService.isItemSaved(item);
  }

  ngOnInit(): void {
    this.filteredRecommendedItems = [...this.recommendedItems];

    this.searchService.searchTerm$.subscribe((term) => {
      const lowerTerm = term.toLowerCase();

      this.filteredRecommendedItems = this.recommendedItems.filter(item =>
        item.title.toLowerCase().includes(lowerTerm)
      );
    });
  }

  // ngOnInit(): void {
  //   this.filteredRecommendedItems = [...this.recommendedItems];

  //   this.searchService.searchTerm$.subscribe((term) => {
  //     const lowerTerm = term.toLowerCase();

  //     // Dynamically grab all <h3> tag text on the page
  //     const h3Text = Array.from(document.querySelectorAll('h3'))
  //       .map(el => el.textContent?.toLowerCase() || '')
  //       .join(' ');

  //     // If the term is found in any <h3> tag, show all items
  //     if (h3Text.includes(lowerTerm)) {
  //       this.filteredRecommendedItems = [...this.recommendedItems];
  //       return;
  //     }

  //     // Otherwise, filter based on item content
  //     this.filteredRecommendedItems = this.recommendedItems.filter(item => {
  //       const combinedText = `
  //         ${item.title}
  //         ${item.reviews}
  //         ${item.rating}
  //         ${item.price}
  //       `.toLowerCase();

  //       return combinedText.includes(lowerTerm);
  //     });
  //   });
  // }


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

  // chunkedRecommendedItems() {
  //   const chunkSize = 4;
  //   const result = [];
  //   const items = this.filteredRecommendedItems;

  //   const total = items.length;
  //   let i = 0;

  //   while (i < total) {
  //     const chunk = [];

  //     for (let j = 0; j < chunkSize && i + j < total; j++) {
  //       chunk.push(items[i + j]);
  //     }

  //     result.push(chunk);
  //     i += chunkSize;
  //   }

  //   return result;
  // }

  chunkedRecommendedItems() {
    const chunkSize = 4;
    const result = [];
    const items = this.filteredRecommendedItems;
    const total = items.length;

    if (total === 0) return [];

    const isFiltered = total !== this.recommendedItems.length;

    let i = 0;

    while (i < total) {
      const chunk = [];

      for (let j = 0; j < chunkSize; j++) {
        const index = i + j;

        if (index < total) {
          chunk.push(items[index]);
        } else {
          if (!isFiltered) {
            // wrap around only if not filtered
            chunk.push(items[index % total]);
          }
        }
      }

      result.push(chunk);
      i += chunkSize;
    }

    return result;
  }


  // toggleTitle(title: string) {
  //   this.showFullTitle[title] = !this.showFullTitle[title];
  // }

  toggleTitle(title: string, event: Event): void {
    event.stopPropagation();
    this.showFullTitle[title] = !this.showFullTitle[title];
  }


}
