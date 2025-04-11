import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationThreeComponent } from './recommendation-three.component';

describe('RecommendationThreeComponent', () => {
  let component: RecommendationThreeComponent;
  let fixture: ComponentFixture<RecommendationThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommendationThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
