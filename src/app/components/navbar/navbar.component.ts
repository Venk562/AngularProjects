import { Component } from '@angular/core';
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-navbar',
  standalone: false ,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isActivitiesPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const activityRoutes = [
      '/activities',
      '/recommendation-one',
      '/recommendation-two',
      '/recommendation-three',
      '/recommendation-four',
      '/singapore-attractions',
      '/singapore-zoo',
      '/singapore-tours',
      '/singapore-museums',
      '/singapore-experiences',
      '/explore-singapore',
      '/popular-things-one',
      '/popular-things-two',
      '/popular-things-three',
      '/popular-things-four',
      '/popular-things-five',
      '/popular-things-six',
      '/popular-things-seven',
      '/popular-things-eight',
      '/popular-things-nine',
      '/popular-things-ten',
    ];

    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      this.isActivitiesPage = activityRoutes.some(route => currentUrl.includes(route));
    });
  }

}
