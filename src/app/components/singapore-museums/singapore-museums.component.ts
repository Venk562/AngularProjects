import { Component } from '@angular/core';

@Component({
  selector: 'app-singapore-museums',
  standalone: false,
  templateUrl: './singapore-museums.component.html',
  styleUrl: './singapore-museums.component.css'
})
export class SingaporeMuseumsComponent {

  showFullTitle: { [key: string]: boolean } = {};
  museums = [
    {
      id:1,
      title: 'National Museum of Singapore',
      image: '/assets/images/Singapore-museums-1.jpg',
      description: 'The oldest museum in Singapore with rich history exhibitions.',
      rating: 4.7,
      reviews: 224,
      price: 'Free Entry',
      route:'/'
    },
    {
      id:2,
      title: 'ArtScience Museum',
      image: '/assets/images/art-science-museum-singapore-2.jpg',
      description: 'A futuristic space exploring the fusion of art and science.',
      rating: 4.6,
      reviews: 224,
      price: '1585',
      route:'/'
    },
    {
      id:3,
      title: 'Asian Civilisations Museum',
      image: '/assets/images/Singapore_Asian_Civilisations_Museum.webp',
      description: 'Showcases the diverse heritage of Asia, especially Singapore.',
      rating: 4.5,
      reviews: 224,
      price: '1000',
      route:'/'
    },
    {
      id:4,
      title: 'Peranakan Museum',
      image: '/assets/images/Peranakan-Museum-6.jpg',
      description: 'Dedicated to Peranakan culture and traditions.',
      rating: 4.4,
      reviews: 224,
      price: '670',
      route:'/'
    }
  ];

  featuredMuseums = [
    {
      name: 'National Museum of Singapore',
      image: '/assets/images/Singapore-museums-1.jpg',
    },
    {
      name: 'ArtScience Museum',
      image: '/assets/images/art-science-museum-singapore-2.jpg',
    },
    {
      name: 'Asian Civilisations Museum',
      image: '/assets/images/asian-civilisation-museum-singapore-2.jpeg',
    },
    {
      name: 'Science Centre Singapore',
      image: '/assets/images/museum1.jpg',
    },
    {
      name: 'Lee Kong Chian Natural History Museum',
      image: '/assets/images/Lee Kong Chian Natural History Museum-4.webp',
    },
    {
      name: 'Peranakan-Museum Singapore',
      image: '/assets/images/Peranakan-Museum-1.webp',
    }
  ];

  toggleTitle(title: string, event: Event): void {
    event.stopPropagation(); // Prevents routing trigger
    this.showFullTitle[title] = !this.showFullTitle[title];
  }

}
