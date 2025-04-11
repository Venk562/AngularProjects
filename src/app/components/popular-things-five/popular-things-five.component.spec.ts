import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularThingsFiveComponent } from './popular-things-five.component';

describe('PopularThingsFiveComponent', () => {
  let component: PopularThingsFiveComponent;
  let fixture: ComponentFixture<PopularThingsFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularThingsFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularThingsFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
