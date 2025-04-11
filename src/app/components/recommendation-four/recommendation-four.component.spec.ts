import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationFourComponent } from './recommendation-four.component';

describe('RecommendationFourComponent', () => {
  let component: RecommendationFourComponent;
  let fixture: ComponentFixture<RecommendationFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommendationFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
