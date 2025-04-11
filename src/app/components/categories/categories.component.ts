import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories = [
    {
      id: 1,
      name: 'Attractions',
      image: '/assets/images/Attractions.png',
      route: '/singapore-attractions'
    },
    {
      id: 2,
      name: 'Zoo',
      image: '/assets/images/Zoo.png',
      route: '/singapore-zoo'
    },
    {
      id: 3,
      name: 'Tours',
      image: '/assets/images/Tours.png',
      route: '/singapore-tours'
    },
    {
      id: 4,
      name: 'Museums',
      image: '/assets/images/Museums.png',
      route: '/singapore-museums'
    },
    {
      id: 5,
      name: 'Experiences',
      image: '/assets/images/Experiences.png',
      route: '/singapore-experiences'
    }
  ];
}
