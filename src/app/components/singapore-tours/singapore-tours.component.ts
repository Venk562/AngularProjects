import { Component } from '@angular/core';

@Component({
  selector: 'app-singapore-tours',
  standalone: false,
  templateUrl: './singapore-tours.component.html',
  styleUrl: './singapore-tours.component.css'
})
export class SingaporeToursComponent {

  carouselItems = [
    {
      image: '/assets/images/Marina Bay Sands Sky Park 10.jpg',
      title: 'Marina Bay Sands',
      description: 'SkyPark and skyline views'
    },
    {
      image: '/assets/images/Universal Studios Singapore-7.jpg',
      title: 'Universal Studios',
      description: 'Thrilling rides and shows'
    },
    {
      image: '/assets/images/garden_by_bay.avif',
      title: 'Gardens by the Bay',
      description: 'Futuristic garden domes'
    }
  ];




  tours = [
    {
      title: 'Marina Bay Sands SkyPark',
      image: '/assets/images/Marina Bay Sands Sky Park 1.jpg',
      rating: 4.8,
      reviews: 1200,
      price: '$32',

    },
    {
      title: 'Singapore Flyer',
      image: '/assets/images/Singapore Flyer Tickets Two.jpg',
      rating: 4.6,
      reviews: 890,
      price: '$25'
    },
    {
      title: 'Universal Studios Singapore',
      image: '/assets/images/Universal Studios Singapore.jpg',
      rating: 4.9,
      reviews: 2300,
      price: '$68'
    },
    {
      title: 'Gardens by the Bay',
      image: '/assets/images/Gaderns By The Bay Tickets.jpg',
      rating: 4.7,
      reviews: 1500,
      price: '$20'
    }
  ];


}
