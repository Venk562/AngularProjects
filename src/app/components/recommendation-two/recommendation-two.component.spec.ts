import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationTwoComponent } from './recommendation-two.component';

describe('RecommendationTwoComponent', () => {
  let component: RecommendationTwoComponent;
  let fixture: ComponentFixture<RecommendationTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommendationTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
