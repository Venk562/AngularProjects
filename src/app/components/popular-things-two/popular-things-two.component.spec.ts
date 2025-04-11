import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularThingsTwoComponent } from './popular-things-two.component';

describe('PopularThingsTwoComponent', () => {
  let component: PopularThingsTwoComponent;
  let fixture: ComponentFixture<PopularThingsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularThingsTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularThingsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
