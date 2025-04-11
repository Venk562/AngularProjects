import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-singapore',
  standalone: false,
  templateUrl: './explore-singapore.component.html',
  styleUrl: './explore-singapore.component.css'
})
export class ExploreSingaporeComponent {
  attractions = [
    {
      title: 'Marina Bay Sands',
      image: '/assets/images/Marina Bay Sands Sky Park 5.avif',
      description: 'Iconic hotel with a skypark, infinity pool, and panoramic views.'
    },
    {
      title: 'Gardens by the Bay',
      image: '/assets/images/garden_by_bay.avif',
      description: 'Futuristic gardens with Supertrees and biodomes.'
    },
    {
      title: 'Sentosa Island',
      image: '/assets/images/Sentosa_island_tour.jpg',
      description: 'Tropical island resort with attractions, beaches, and Universal Studios.'
    }
  ];

  galleryImages = [
    '/assets/images/Singapore River Cruise-4.jpg',
    '/assets/images/Sentosa Island_files/83d57059dce56a315dbf088c47da68b1-southern-ridges.jpg',
    '/assets/images/Sentosa Island_files/106854955.jpg',
    '/assets/images/Sentosa Island_files/a2aa48e66952bf8816898991072e32f5-macritchie-reservoir.jpg',
    '/assets/images/art-science-museum-singapore-2.jpg',
    '/assets/images/attraction-singapore-1.jpg',
    '/assets/images/cabel car singapore tickets.jpg',
    '/assets/images/Manadi Rain Forest Wild Asia Tickets.jpg'
  ];

}
