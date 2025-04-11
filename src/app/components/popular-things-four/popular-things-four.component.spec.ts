import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularThingsFourComponent } from './popular-things-four.component';

describe('PopularThingsFourComponent', () => {
  let component: PopularThingsFourComponent;
  let fixture: ComponentFixture<PopularThingsFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularThingsFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularThingsFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
