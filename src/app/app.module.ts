import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { RecommendedItemsComponent } from './components/recommended-items/recommended-items.component';
import { ExploreDestinationsComponent } from './components/explore-destinations/explore-destinations.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PopularThingsComponent } from './components/popular-things/popular-things.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewAllActivitiesComponent } from './components/view-all-activities/view-all-activities.component';
import { RecommendationOneComponent } from './components/recommendation-one/recommendation-one.component';
import { RecommendationTwoComponent } from './components/recommendation-two/recommendation-two.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { RecommendationThreeComponent } from './components/recommendation-three/recommendation-three.component';
import { RecommendationFourComponent } from './components/recommendation-four/recommendation-four.component';
import { SingaporeAttractionsComponent } from './components/singapore-attractions/singapore-attractions.component';
import { SingaporeZooComponent } from './components/singapore-zoo/singapore-zoo.component';
import { SingaporeToursComponent } from './components/singapore-tours/singapore-tours.component';
import { SingaporeMuseumsComponent } from './components/singapore-museums/singapore-museums.component';
import { SingaporeExperiencesComponent } from './components/singapore-experiences/singapore-experiences.component';
import { ExploreSingaporeComponent } from './components/explore-singapore/explore-singapore.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ng-carousel-cdk';
import { PopularThingsOneComponent } from './components/popular-things-one/popular-things-one.component';
import { PopularThingsTwoComponent } from './components/popular-things-two/popular-things-two.component';
import { PopularThingsThreeComponent } from './components/popular-things-three/popular-things-three.component';
import { PopularThingsFourComponent } from './components/popular-things-four/popular-things-four.component';
import { PopularThingsFiveComponent } from './components/popular-things-five/popular-things-five.component';
import { PopularThingsSixComponent } from './components/popular-things-six/popular-things-six.component';
import { PopularThingsSevenComponent } from './components/popular-things-seven/popular-things-seven.component';
import { PopularThingsEightComponent } from './components/popular-things-eight/popular-things-eight.component';
import { PopularThingsNineComponent } from './components/popular-things-nine/popular-things-nine.component';
import { PopularThingsTenComponent } from './components/popular-things-ten/popular-things-ten.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ArtMuseumComponent } from './components/art-museum/art-museum.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    RecommendedItemsComponent,
    ExploreDestinationsComponent,
    CategoriesComponent,
    PopularThingsComponent,
    FooterComponent,
    ViewAllActivitiesComponent,
    RecommendationOneComponent,
    RecommendationTwoComponent,
    RecommendationThreeComponent,
    RecommendationFourComponent,
    SingaporeAttractionsComponent,
    SingaporeZooComponent,
    SingaporeToursComponent,
    SingaporeMuseumsComponent,
    SingaporeExperiencesComponent,
    ExploreSingaporeComponent,
    PopularThingsOneComponent,
    PopularThingsTwoComponent,
    PopularThingsThreeComponent,
    PopularThingsFourComponent,
    PopularThingsFiveComponent,
    PopularThingsSixComponent,
    PopularThingsSevenComponent,
    PopularThingsEightComponent,
    PopularThingsNineComponent,
    PopularThingsTenComponent,
    WishListComponent,
    SearchResultsComponent,
    BreadcrumbComponent,
    ArtMuseumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    CarouselModule

  ],
  providers: [ MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
