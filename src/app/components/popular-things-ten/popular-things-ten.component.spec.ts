import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularThingsTenComponent } from './popular-things-ten.component';

describe('PopularThingsTenComponent', () => {
  let component: PopularThingsTenComponent;
  let fixture: ComponentFixture<PopularThingsTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularThingsTenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularThingsTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
