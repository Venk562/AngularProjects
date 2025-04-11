import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-activities',
  standalone: false,
  templateUrl: './view-all-activities.component.html',
  styleUrl: './view-all-activities.component.css'
})
export class ViewAllActivitiesComponent implements OnInit {
  showFullTitle: { [key: string]: boolean } = {};

  hawParVillaDescription = `
  In 1988, Singapore Tourism Board took charge of the Tiger Balm Gardens and renamed it
  "Haw Par Villa Dragon World". The Haw Par in the park's name is based on the Aw brothers'
  personal names Haw and Par, which mean "tiger" and "leopard" respectively. The dioramas
  and statues were restored, while plays, acrobatic displays, and puppet shows were organised
  and held there.

  The management imposed entrance fees, but the high fees discouraged visitors, so the
  management incurred a loss of S$31.5 million over 10 years. The park management made a profit
  during its first year of operations after renovations in 1994, broke even in 1995, but
  started incurring losses over the next three years and was forced to provide free entries in 1998.

  In March 2001, the Singapore Tourism Board renamed it "Tiger Balm Gardens".

  The park is now open every day from 9 am to 10 pm (with last entry at 9:30 pm) and admission
  is free. The Hell's Museum requires an admission fee of SGD20 for adults and SGD10 for children.
`;

  popularThings = [
    {
      title: 'Universal Studios Singapore',
      image: '/assets/images/Universal Studios Singapore.jpg',
      rating: 4.6,
      reviews: 224,
      price: 25
    },
    {
      title: 'Gardens By The Bay Tickets',
      image: '/assets/images/Gaderns By The Bay Tickets.jpg',
      rating: 4.7,
      reviews: 295,
      price: 38.29
    },
    {
      title: 'Harry Poter vissions Of Magic Tickets',
      image: '/assets/images/harry potter visions of magic.jpg',
      rating: 4.2,
      reviews: 581,
      price: 35
    },
    {
      title: 'Night Safari Tickets',
      image: '/assets/images/night safari tickets.jpg',
      rating: 5.0,
      reviews: 230,
      price: 28
    }
  ];

  popularThingsSecond = [
    {
      title: 'Cable Car Singapore Tickets',
      image: '/assets/images/cabel car singapore tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 25
    },
    {
      title: 'S.E.A Aquarium Tickets',
      image: '/assets/images/SEA Aquarium Tickets.png',
      rating: 4.7,
      reviews: 295,
      price: 38.29
    },
    {
      title: 'Singapore Zoo Admission Tickets',
      image: '/assets/images/Singapore Zoo Admission Tickets.jpg',
      rating: 4.2,
      reviews: 581,
      price: 35
    },
    {
      title: 'Skyline Luge Sentosa Tickets',
      image: '/assets/images/Skyline Luge Sentosa Tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 25
    }
  ];

  popularThingsThird = [
    {
      title: 'Marina Bay Sand Sky Park Observation Deck Tickets',
      image: '/assets/images/Marina Bay Sands Sky Park Observation Deck Tickets-2.jpg',
      rating: 4.6,
      reviews: 224,
      price: 25
    },
    {
      title: 'River Wonders Tickets',
      image: '/assets/images/River Wonders Tickets.jpg',
      rating: 4.7,
      reviews: 295,
      price: 38.29
    },
    {
      title: 'Bird Paradise Tickets',
      image: '/assets/images/Bird Paradise Tickets.jpg',
      rating: 4.2,
      reviews: 581,
      price: 35
    },
    {
      title: 'Manadi Rain Forest Wild Asia Tickets',
      image: '/assets/images/Manadi Rain Forest Wild Asia Tickets.jpg',
      rating: 4.6,
      reviews: 224,
      price: 25
    }
  ];

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  toggleTitle(title: string) {
    // Toggle the showFullTitle flag for the clicked item
    this.showFullTitle[title] = !this.showFullTitle[title];
  }
}




