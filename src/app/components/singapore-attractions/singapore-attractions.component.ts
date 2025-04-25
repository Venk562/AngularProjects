import { Component } from '@angular/core';
import { SavedItemsService, RecommendedItem } from '../../services/saved-items.service';
import { SearchService } from '../../services/search.service';
import { WishlistService } from '../../services/wishlist.service';

declare var bootstrap: any;

@Component({
  selector: 'app-singapore-attractions',
  standalone: false,
  templateUrl: './singapore-attractions.component.html',
  styleUrl: './singapore-attractions.component.css'
})
export class SingaporeAttractionsComponent{

  showFullTitle: { [key: string]: boolean } = {};
  museums = [

    {
      id: 6,
      title: 'Gardens By The Bay Tickets',
      image: '/assets/images/Gardens-by-the-Bay-2.jpg',
      rating: 4.7,
      reviews: 295,
      price: 2338,
      route: '/popular-things-two'
    },
    {
      id: 3,
      title: 'Marina Bay Sands Sky Park',
      image: '/assets/images/SingaporeMarinaGolfCourse.jpg',
      rating: 4.2,
      reviews: 581,
      price: 2174,
      route: '/recommendation-three'
    },
   {
      id: 2,
      title: 'Singapore Flyer Tickets',
      image: '/assets/images/singapore_flyer.jpg',
      rating: 4.7,
      reviews: 295,
      price: 2756,
      route: '/recommendation-two'
    },
   {
      id: 10,
      title: 'S.E.A Aquarium Tickets',
      image: '/assets/images/SEA Aquarium Tickets-4.webp',
      rating: 4.7,
      reviews: 295,
      price: 3426,
      route: '/popular-things-six'
    },
   {
      id: 11,
      title: 'Singapore Zoo Admission Tickets',
      image: '/assets/images/Singapore_Zoo.jpg',
      rating: 4.2,
      reviews: 581,
      price: 4008,
      route: '/popular-things-seven'
    },
    {
      id: 8,
      title: 'Night Safari Tickets',
      image: '/assets/images/night safari tickets-4.avif',
      rating: 5.0,
      reviews: 230,
      price: 4593,
      route: '/popular-things-four'
    },
    {
      id: 13,
      title: 'Bird Paradise Tickets',
      image: '/assets/images/jurong-birdpark_2.jpg',
      rating: 4.2,
      reviews: 581,
      price: 3173,
      route: '/popular-things-nine'
    },
    {
      id: 15,
      title: 'ArtScience Museum Tickets',
      image: '/assets/images/art-science-museum-singapore-3.avif',
      rating: 4.4,
      reviews: 642,
      price: 2500,
      route: '/artscience-museum'
    }

  ];

  constructor(private savedItemsService: SavedItemsService,wishlistService: WishlistService, private searchService: SearchService){}

  featuredMuseums = [
    {
      name: 'Gardens by the Bay',
      image: '/assets/images/Gardens-by-the-Bay-4.jpeg',
    },
    {
      name: 'Marina Bay Sands SkyPark',
      image: '/assets/images/Marina Bay Sands Sky Park 10.jpg',
    },
    {
      name: 'Universal Studios Singapore',
      image: '/assets/images/Universal Studios Singapore-7.jpg',
    },
    {
      name: 'Singapore Flyer',
      image: '/assets/images/singapore-flyer.jpeg',
    },
    {
      name: 'S.E.A. Aquarium',
      image: '/assets/images/SEA Aquarium Tickets-7.jpg',
    }

  ];
  wishlistService: any;
  savedCount: any;

  toggleTitle(title: string, event: Event): void {
    event.stopPropagation(); // Prevents routing trigger
    this.showFullTitle[title] = !this.showFullTitle[title];
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
  toggleTitleCard(title: string) {
    this.showFullTitle[title] = !this.showFullTitle[title];
  }


}



