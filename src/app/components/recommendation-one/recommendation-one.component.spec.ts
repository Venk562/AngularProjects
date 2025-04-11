import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationOneComponent } from './recommendation-one.component';

describe('RecommendationOneComponent', () => {
  let component: RecommendationOneComponent;
  let fixture: ComponentFixture<RecommendationOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommendationOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
