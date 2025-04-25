import { Component } from '@angular/core';
import { SavedItemsService, RecommendedItem } from '../../services/saved-items.service';
import { SearchService } from '../../services/search.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-singapore-experiences',
  standalone: false,
  templateUrl: './singapore-experiences.component.html',
  styleUrl: './singapore-experiences.component.css'
})
export class SingaporeExperiencesComponent {
  showFullTitle: { [key: string]: boolean } = {};

  popularThings = [
    {
      id:5,
      title: 'Universal Studios Singapore',
      image: '/assets/images/Universal Studios Singapore.jpg',
      rating: 4.6,
      reviews: 224,
      price: 5105,
      route:'/popular-things-one'

    },
    {
      id:6,
      title: 'Gardens By The Bay Tickets',
      image: '/assets/images/Gaderns By The Bay Tickets.jpg',
      rating: 4.7,
      reviews: 295,
      price: 1230,
       route:'/popular-things-two'
    },
    {
      id:7,
      title: 'Harry Poter vissions Of Magic Tickets',
      image: '/assets/images/harry potter visions of magic.jpg',
      rating: 4.2,
      reviews: 581,
      price: 3014,
      route:'/popular-things-three'
    },
    {
      id:8,
      title: 'Night Safari Tickets',
      image: '/assets/images/night safari tickets.jpg',
      rating: 5.0,
      reviews: 230,
      price: 3075,
      route:'/popular-things-four'
    },

  ];

  popularThingsSecond = [
    {
      id:9,
      title: 'Cable Car Singapore Tickets',
      image: '/assets/images/cabel car singapore tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 1937,
      route:'/popular-things-five'
    },
    {
      id:10,
      title: 'S.E.A Aquarium Tickets',
      image: '/assets/images/SEA Aquarium Tickets.png',
      rating: 4.7,
      reviews: 295,
      price: 2029,
      route:'/popular-things-six'
    },
    {
      id:11,
      title: 'Singapore Zoo Admission Tickets',
      image: '/assets/images/Singapore Zoo Admission Tickets.jpg',
      rating: 4.2,
      reviews: 581,
      price: 3075,
        route:'/popular-things-seven'
    },
    {
      id:1,
      title: 'Skyline Luge Sentosa Tickets',
      image: '/assets/images/Skyline Luge Sentosa Tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 1937,
      route:'/recommendation-one/'
    },
  ];

  popularThingsThird = [
    {
      id:3,
      title: 'Marina Bay Sand Sky Park Observation Deck Tickets',
      image: '/assets/images/Marina Bay Sands Sky Park Observation Deck Tickets-2.jpg',
      rating: 4.6,
      reviews: 224,
      price: 2399,
      route:'/recommendation-three/'
    },
    {
      id:12,
      title: 'River Wonders Tickets',
      image: '/assets/images/River Wonders Tickets.jpg',
      rating: 4.7,
      reviews: 295,
      price: 2645,
      route:'/popular-things-eight/'
    },
    {
      id:13,
      title: 'Bird Paradise Tickets',
      image: '/assets/images/Bird Paradise Tickets.jpg',
      rating: 4.2,
      reviews: 581,
      price: 1884,
       route:'/popular-things-nine/'
    },
    {
      id:14,
      title: 'Manadi Rain Forest Wild Asia Tickets',
      image: '/assets/images/Manadi Rain Forest Wild Asia Tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 1907,
       route:'/popular-things-ten/'
    },
  ];
  wishlistService: any;
  savedCount: any;
constructor(private savedItemsService: SavedItemsService,wishlistService: WishlistService, private searchService: SearchService){}

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleTitle(title: string, event: Event): void {
    event.stopPropagation();
    this.showFullTitle[title] = !this.showFullTitle[title];
  }

  toggleSave(item: any): void {
    this.savedItemsService.toggleItem(item);
  }

  onBookmarkClick(event: MouseEvent, item: any): void {
    event.stopPropagation();
    event.preventDefault();
    this.toggleSave(item);
  }


  isItemSaved(item: RecommendedItem): boolean {

    return this.savedItemsService.isItemSaved(item);
  }



    toggleTitleCard(title: string) {
      // Toggle the showFullTitle flag for the clicked item
      this.showFullTitle[title] = !this.showFullTitle[title];
    }
}
