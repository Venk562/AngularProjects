import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllActivitiesComponent } from './components/view-all-activities/view-all-activities.component';
import { HomeComponent } from './home/home.component';
import { RecommendationOneComponent } from './components/recommendation-one/recommendation-one.component';
import { RecommendationTwoComponent } from './components/recommendation-two/recommendation-two.component';
import { RecommendationThreeComponent } from './components/recommendation-three/recommendation-three.component';
import { RecommendationFourComponent } from './components/recommendation-four/recommendation-four.component';
import { SingaporeAttractionsComponent } from './components/singapore-attractions/singapore-attractions.component';
import { SingaporeZooComponent } from './components/singapore-zoo/singapore-zoo.component';
import { SingaporeToursComponent } from './components/singapore-tours/singapore-tours.component';
import { SingaporeMuseumsComponent } from './components/singapore-museums/singapore-museums.component';
import { SingaporeExperiencesComponent } from './components/singapore-experiences/singapore-experiences.component';
import { ExploreSingaporeComponent } from './components/explore-singapore/explore-singapore.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'activities', component: ViewAllActivitiesComponent },
  { path: 'recommendation-one/:id', component: RecommendationOneComponent },
  { path: 'recommendation-two/:id', component: RecommendationTwoComponent },
  { path: 'recommendation-three/:id', component: RecommendationThreeComponent },
  { path: 'recommendation-four/:id', component: RecommendationFourComponent },
  { path: 'singapore-attractions/:id', component: SingaporeAttractionsComponent },
  { path: 'singapore-zoo/:id', component: SingaporeZooComponent },
  { path: 'singapore-tours/:id', component: SingaporeToursComponent},
  { path: 'singapore-museums/:id', component: SingaporeMuseumsComponent},
  { path: 'singapore-experiences/:id', component: SingaporeExperiencesComponent},
  { path: 'explore-singapore/:id', component: ExploreSingaporeComponent},
  { path: 'popular-things-one/:id', component: PopularThingsOneComponent},
  { path: 'popular-things-two/:id', component: PopularThingsTwoComponent},
  { path: 'popular-things-three/:id', component: PopularThingsThreeComponent},
  { path: 'popular-things-four/:id', component: PopularThingsFourComponent},
  { path: 'popular-things-five/:id', component: PopularThingsFiveComponent},
  { path: 'popular-things-six/:id', component: PopularThingsSixComponent},
  { path: 'popular-things-seven/:id', component: PopularThingsSevenComponent},
  { path: 'popular-things-eight/:id', component: PopularThingsEightComponent},
  { path: 'popular-things-nine/:id', component: PopularThingsNineComponent},
  { path: 'popular-things-ten/:id', component: PopularThingsTenComponent},

  // { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
