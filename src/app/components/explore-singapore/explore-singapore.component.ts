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
      id:1,
      title: 'Marina Bay Sands',
      image: '/assets/images/Marina Bay Sands Sky Park 5.avif',
      description: 'Iconic hotel with a skypark, infinity pool, and panoramic views.',
      route:'/recommendation-three'
    },
    {
      id:2,
      title: 'Gardens by the Bay',
      image: '/assets/images/garden_by_bay.avif',
      description: 'Futuristic gardens with Supertrees and biodomes.',
      route:'/popular-things-two'
    },
    {
      id:3,
      title: 'Sentosa Island',
      image: '/assets/images/Sentosa_island_tour.jpg',
      description: 'Tropical island resort with attractions, beaches, and Universal Studios.',
      route:'/'
    }
  ];

  galleryImages = [
    { src: '/assets/images/Singapore River Cruise-4.jpg', name: 'Singapore River Cruise' },
    { src: '/assets/images/Sentosa Island_files/83d57059dce56a315dbf088c47da68b1-southern-ridges.jpg', name: 'Southern Ridges' },
    { src: '/assets/images/Sentosa Island_files/106854955.jpg', name: 'Sentosa Beach' },
    { src: '/assets/images/Sentosa Island_files/a2aa48e66952bf8816898991072e32f5-macritchie-reservoir.jpg', name: 'MacRitchie Reservoir' },
    { src: '/assets/images/art-science-museum-singapore-2.jpg', name: 'ArtScience Museum' },
    { src: '/assets/images/attraction-singapore-1.jpg', name: 'Merlion Park' },
    { src: '/assets/images/cabel car singapore tickets.jpg', name: 'Cable Car Ride' },
    { src: '/assets/images/Manadi Rain Forest Wild Asia Tickets.jpg', name: 'Mandai Rainforest' }
  ];


}
