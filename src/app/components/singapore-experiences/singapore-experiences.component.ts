import { Component } from '@angular/core';

@Component({
  selector: 'app-singapore-experiences',
  standalone: false,
  templateUrl: './singapore-experiences.component.html',
  styleUrl: './singapore-experiences.component.css'
})
export class SingaporeExperiencesComponent {
  experiences = [
    {
      name: 'Night Safari',
      image: '/assets/images/night safari tickets-2.jpg',
      description: 'Explore the world’s first nocturnal zoo with amazing wildlife.',
      rating: 4.8,
      price: '$45'
    },
    {
      name: 'Marina Bay SkyPark',
      image: '/assets/images/Marina Bay Sands Sky Park 8.jpg',
      description: 'Catch stunning views from the iconic Marina Bay Sands SkyPark.',
      rating: 4.7,
      price: '$28'
    },
    {
      name: 'Singapore River Cruise',
      image: '/assets/images/Singapore River Cruise-1.jpg',
      description: 'Enjoy a relaxing boat ride through Singapore’s historic quays.',
      rating: 4.6,
      price: '$25'
    },
    {
      name: 'Sentosa Adventure Cove',
      image: '/assets/images/Sentosa Adventure Cove-2.jpg',
      description: 'Water rides, snorkeling, and fun at Sentosa’s top aquatic park.',
      rating: 4.5,
      price: '$38'
    }
    // Add more if needed
  ];

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
