import { Component } from '@angular/core';

@Component({
  selector: 'app-singapore-museums',
  standalone: false,
  templateUrl: './singapore-museums.component.html',
  styleUrl: './singapore-museums.component.css'
})
export class SingaporeMuseumsComponent {
  museums = [
    {
      name: 'National Museum of Singapore',
      image: '/assets/images/Singapore-museums-1.jpg',
      description: 'The oldest museum in Singapore with rich history exhibitions.',
      rating: 4.7,
      price: 'Free Entry'
    },
    {
      name: 'ArtScience Museum',
      image: '/assets/images/art-science-museum-singapore-2.jpg',
      description: 'A futuristic space exploring the fusion of art and science.',
      rating: 4.6,
      price: '$19'
    },
    {
      name: 'Asian Civilisations Museum',
      image: '/assets/images/Singapore_Asian_Civilisations_Museum.webp',
      description: 'Showcases the diverse heritage of Asia, especially Singapore.',
      rating: 4.5,
      price: '$12'
    },
    {
      name: 'Peranakan Museum',
      image: '/assets/images/Peranakan-Museum-6.jpg',
      description: 'Dedicated to Peranakan culture and traditions.',
      rating: 4.4,
      price: '$8'
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
      image: '/assets/images/museum1.jpg',
    }
  ];



}
