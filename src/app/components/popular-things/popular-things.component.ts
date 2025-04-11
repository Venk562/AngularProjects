import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-things',
  standalone: false,
  templateUrl: './popular-things.component.html',
  styleUrl: './popular-things.component.css'
})
export class PopularThingsComponent implements OnInit{

  showFullTitle: { [key: string]: boolean } = {};

  popularThings = [
    {
      id:1,
      title: 'Universal Studios Singapore',
      image: '/assets/images/Universal Studios Singapore.jpg',
      rating: 4.6,
      reviews: 224,
      price: 25,
      route:'/popular-things-one'

    },
    {
      id:2,
      title: 'Gardens By The Bay Tickets',
      image: '/assets/images/Gaderns By The Bay Tickets.jpg',
      rating: 4.7,
      reviews: 295,
      price: 38.29,
       route:'/popular-things-two'
    },
    {
      id:3,
      title: 'Harry Poter vissions Of Magic Tickets',
      image: '/assets/images/harry potter visions of magic.jpg',
      rating: 4.2,
      reviews: 581,
      price: 35,
      route:'/popular-things-three'
    },
    {
      id:4,
      title: 'Night Safari Tickets',
      image: '/assets/images/night safari tickets.jpg',
      rating: 5.0,
      reviews: 230,
      price: 28,
      route:'/popular-things-four'
    },

  ];

  popularThingsSecond = [
    {
      id:1,
      title: 'Cable Car Singapore Tickets',
      image: '/assets/images/cabel car singapore tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 25,
      route:'/popular-things-five'
    },
    {
      id:2,
      title: 'S.E.A Aquarium Tickets',
      image: '/assets/images/SEA Aquarium Tickets.png',
      rating: 4.7,
      reviews: 295,
      price: 38.29,
      route:'/popular-things-six'
    },
    {
      id:3,
      title: 'Singapore Zoo Admission Tickets',
      image: '/assets/images/Singapore Zoo Admission Tickets.jpg',
      rating: 4.2,
      reviews: 581,
      price: 35,
        route:'/popular-things-seven'
    },
    {
      id:1,
      title: 'Skyline Luge Sentosa Tickets',
      image: '/assets/images/Skyline Luge Sentosa Tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 25,
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
      price: 25,
      route:'/recommendation-three/'
    },
    {
      id:2,
      title: 'River Wonders Tickets',
      image: '/assets/images/River Wonders Tickets.jpg',
      rating: 4.7,
      reviews: 295,
      price: 38.29,
      route:'/popular-things-eight/'
    },
    {
      id:3,
      title: 'Bird Paradise Tickets',
      image: '/assets/images/Bird Paradise Tickets.jpg',
      rating: 4.2,
      reviews: 581,
      price: 35,
       route:'/popular-things-nine/'
    },
    {
      id:4,
      title: 'Manadi Rain Forest Wild Asia Tickets',
      image: '/assets/images/Manadi Rain Forest Wild Asia Tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 25,
       route:'/popular-things-ten/'
    },

  ];
  // route: any;

  toggleTitle(title: string) {
    // Toggle the showFullTitle flag for the clicked item
    this.showFullTitle[title] = !this.showFullTitle[title];
  }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    // console.log('ID from route:', id);
  }
}
