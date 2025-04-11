import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularThingsEightComponent } from './popular-things-eight.component';

describe('PopularThingsEightComponent', () => {
  let component: PopularThingsEightComponent;
  let fixture: ComponentFixture<PopularThingsEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularThingsEightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularThingsEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
