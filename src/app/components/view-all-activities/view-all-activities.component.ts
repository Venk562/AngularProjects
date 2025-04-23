import { Component, OnInit } from '@angular/core';
import { RecommendedItem, SavedItemsService } from '../../services/saved-items.service';
import { SearchService } from '../../services/search.service';

interface PopularThing {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  route: string;
}

@Component({
  selector: 'app-view-all-activities',
  standalone: false,
  templateUrl: './view-all-activities.component.html',
  styleUrl: './view-all-activities.component.css'
})
export class ViewAllActivitiesComponent implements OnInit {

  showFullTitle: { [key: string]: boolean } = {};

  hawParVillaDescription = `
  Singapore is a vibrant city with a mix of modern attractions and cultural experiences. Visit the iconic Marina Bay Sands and its SkyPark for panoramic city views, and explore the futuristic Gardens by the Bay, home to the Supertree Grove and beautiful conservatories. Sentosa Island offers a resort getaway with Universal Studios, Adventure Cove Waterpark, and serene beaches, while the Singapore Zoo and Night Safari provide unique wildlife experiences. Immerse yourself in the cultural heritage of Chinatown, Little India, and Tiong Bahru, and enjoy vibrant nightlife at Clarke Quay. For shopping, Orchard Road is a must-visit, while the Singapore Flyer offers stunning views of the skyline. Nature lovers can explore the UNESCO-listed Singapore Botanic Gardens, and history buffs will appreciate the Raffles Hotel and Haw Par Villa. Don't miss the Esplanade for performing arts and the Jurong Bird Park to see diverse bird species. With something for everyone, Singapore truly offers a rich blend of entertainment, culture, and nature.
`;



  popularThings: PopularThing[] = [
    {
      id: 5,
      title: 'Universal Studios Singapore',
      image: '/assets/images/Universal Studios Singapore.jpg',
      rating: 4.6,
      reviews: 224,
      price: 5105,
      route: '/popular-things-one'

    },
    {
      id: 6,
      title: 'Gardens By The Bay Tickets',
      image: '/assets/images/Gaderns By The Bay Tickets.jpg',
      rating: 4.7,
      reviews: 295,
      price: 1230,
      route: '/popular-things-two'
    },
    {
      id: 7,
      title: 'Harry Poter vissions Of Magic Tickets',
      image: '/assets/images/harry potter visions of magic.jpg',
      rating: 4.2,
      reviews: 581,
      price: 3014,
      route: '/popular-things-three'
    },
    {
      id: 8,
      title: 'Night Safari Tickets',
      image: '/assets/images/night safari tickets.jpg',
      rating: 5.0,
      reviews: 230,
      price: 3075,
      route: '/popular-things-four'
    },

  ];

  popularThingsSecond: PopularThing[] = [
    {
      id: 9,
      title: 'Cable Car Singapore Tickets',
      image: '/assets/images/cabel car singapore tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 1937,
      route: '/popular-things-five'
    },
    {
      id: 10,
      title: 'S.E.A Aquarium Tickets',
      image: '/assets/images/SEA Aquarium Tickets.png',
      rating: 4.7,
      reviews: 295,
      price: 2029,
      route: '/popular-things-six'
    },
    {
      id: 11,
      title: 'Singapore Zoo Admission Tickets',
      image: '/assets/images/Singapore Zoo Admission Tickets.jpg',
      rating: 4.2,
      reviews: 581,
      price: 3075,
      route: '/popular-things-seven'
    },
    {
      id: 1,
      title: 'Skyline Luge Sentosa Tickets',
      image: '/assets/images/Skyline Luge Sentosa Tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 1937,
      route: '/recommendation-one/'
    },

  ];

  popularThingsThird: PopularThing[] = [
    {
      id: 3,
      title: 'Marina Bay Sand Sky Park Observation Deck Tickets',
      image: '/assets/images/Marina Bay Sands Sky Park Observation Deck Tickets-2.jpg',
      rating: 4.6,
      reviews: 224,
      price: 2399,
      route: '/recommendation-three/'
    },
    {
      id: 12,
      title: 'River Wonders Tickets',
      image: '/assets/images/River Wonders Tickets.jpg',
      rating: 4.7,
      reviews: 295,
      price: 2645,
      route: '/popular-things-eight/'
    },
    {
      id: 13,
      title: 'Bird Paradise Tickets',
      image: '/assets/images/Bird Paradise Tickets.jpg',
      rating: 4.2,
      reviews: 581,
      price: 1884,
      route: '/popular-things-nine/'
    },
    {
      id: 14,
      title: 'Manadi Rain Forest Wild Asia Tickets',
      image: '/assets/images/Manadi Rain Forest Wild Asia Tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 1907,
      route: '/popular-things-ten/'
    },
  ];

  filteredPopularThings: PopularThing[] = [];
  filteredPopularThingsSecond: PopularThing[] = [];
  filteredPopularThingsThird: PopularThing[] = [];
  searchQuery: string = '';

  constructor(private savedItemsService: SavedItemsService, private searchService: SearchService) { }

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

  ngOnInit() {
    window.scrollTo(0, 0);

    this.filteredPopularThings = [...this.popularThings];
    this.filteredPopularThingsSecond = [...this.popularThingsSecond];
    this.filteredPopularThingsThird = [...this.popularThingsThird];

    this.searchService.searchTerm$.subscribe((term) => {
      const lowerTerm = term.toLowerCase();

      this.filteredPopularThings = this.popularThings.filter(item =>
        item.title.toLowerCase().includes(lowerTerm)
      );
      this.filteredPopularThingsSecond = this.popularThingsSecond.filter(item =>
        item.title.toLowerCase().includes(lowerTerm)
      );
      this.filteredPopularThingsThird = this.popularThingsThird.filter(item =>
        item.title.toLowerCase().includes(lowerTerm)
      );
    });
  }




  toggleTitle(title: string, event: Event) {
    event.stopPropagation();
    this.showFullTitle[title] = !this.showFullTitle[title];
  }


  onSearch() {
    this.searchService.setSearchTerm(this.searchQuery);
  }

}




