import { Component } from '@angular/core';
import { Router } from '@angular/router' ;
import { SavedItemsService } from '../../services/saved-items.service';

@Component({
  selector: 'app-navbar',
  standalone: false ,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isActivitiesPage: boolean = false;
  savedCount = 0;

  constructor(private router: Router , private savedItemsService: SavedItemsService) {}

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
      '/wish-list',
    ];

    // this.router.events.subscribe(() => {
    //   const currentUrl = this.router.url;
    //   this.isActivitiesPage = activityRoutes.some(route => currentUrl.includes(route));
    // });

    this.savedItemsService.savedItems$.subscribe((items: any[]) => {
      this.savedCount = items.length;
    });


  }

}
