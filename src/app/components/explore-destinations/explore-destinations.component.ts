import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-destinations',
  standalone: false,
  templateUrl: './explore-destinations.component.html',
  styleUrl: './explore-destinations.component.css'
})
export class ExploreDestinationsComponent {
  ExploreItems = [
    {
      id:1,
      title: 'Singapore',
      image: '/assets/images/HydroDash.png',
      location: 'Singapore',
      route:'/explore-singapore'
    },
    {
      id:2,
      title: 'Thailand',
      image: '/assets/images/Haw Par Villa.jpg',
      location: 'Thailand'
    },
    {
      id:3,
      title: 'Malaysia',
      image: '/assets/images/Mega Adventure.jpg',
      location: 'Malaysia'
    },
    {
      id:4,
      title: 'Dubai',
      image: '/assets/images/Adventure Cove Waterpark.jpg',
      location: 'Dubai'
    },
    {
      id:5,
      title: 'Sri Lanka',
      image: '/assets/images/Universal Studios Singapore.jpg',
      location: 'Sri Lanka'
    }
  ];
}

