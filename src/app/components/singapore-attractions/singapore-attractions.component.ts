import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-singapore-attractions',
  standalone: false,
  templateUrl: './singapore-attractions.component.html',
  styleUrl: './singapore-attractions.component.css'
})
export class SingaporeAttractionsComponent implements OnInit {

  showFullTitle: { [key: string]: boolean } = {};

  selectedFilter: string = 'all'

  attractions = [
    {
      title: 'Marina Bay Sands',
      description: 'Iconic hotel with rooftop infinity pool.',
      image: '/assets/images/Marina Bay Sands Sky Park Observation Deck Tickets.jpg',
      rating: 4.8,
      reviews: '3.2k',
      price: 25,
      category: 'landmark',
      duration: '2 Hours',
      expanded: false
    },
    {
      title: 'Gardens by the Bay',
      description: 'Futuristic park with Supertree Grove.',
      image: '/assets/images/Gaderns By The Bay Tickets.jpg',
      rating: 4.7,
      reviews: '2.8k',
      price: 15,
      category: 'nature',
      duration: '3 Hours',
      expanded: false
    },
    {
      title: 'National Museum',
      description: 'Singapore’s oldest museum with modern exhibits.',
      image: '/assets/images/national-museum.jpg',
      rating: 4.5,
      reviews: '1.5k',
      price: 12,
      category: 'museum',
      duration: '1.5 Hours',
      expanded: false
    },
    {
      title: 'Sentosa Island',
      description: 'Entertainment and beach resort.',
      image: '/assets/images/Sentosa_island.jpg',
      rating: 4.6,
      reviews: '2.2k',
      price: 20,
      category: 'landmark',
      duration: '4 Hours',
      expanded: false
    }
  ];

  filteredAttractions = [...this.attractions];
  selectedImage: string | null = null;

  ngOnInit() {
    this.attractions = this.attractions.map(attraction => ({
      ...attraction,
      expanded: false
    }));
    this.filteredAttractions = [...this.attractions];
  }




  filterAttractions(category: string) {
    this.selectedFilter = category;
    if (category === 'all') {
      this.filteredAttractions = [...this.attractions];
    } else {
      this.filteredAttractions = this.attractions.filter(a => a.category === category);
    }
  }

  openImageModal(image: string) {
    this.selectedImage = image;
    const modal: any = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  }

  toggleTitle(title: string) {
    this.showFullTitle[title] = !this.showFullTitle[title];
  }

  mainImage = '/assets/images/attraction-singapore-3.jpg';

  rightImages = [
    '/assets/images/attraction-singapore-1.jpg',
    '/assets/images/attraction-singapore-2.jpg',
    '/assets/images/attraction-singapore-6.jpg',
    '/assets/images/attraction-singapore-4.jpg',
  ];

  extraImageCount = 2;



}



