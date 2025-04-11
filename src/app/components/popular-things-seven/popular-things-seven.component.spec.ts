import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularThingsSevenComponent } from './popular-things-seven.component';

describe('PopularThingsSevenComponent', () => {
  let component: PopularThingsSevenComponent;
  let fixture: ComponentFixture<PopularThingsSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularThingsSevenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularThingsSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
