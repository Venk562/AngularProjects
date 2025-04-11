import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularThingsNineComponent } from './popular-things-nine.component';

describe('PopularThingsNineComponent', () => {
  let component: PopularThingsNineComponent;
  let fixture: ComponentFixture<PopularThingsNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularThingsNineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularThingsNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
