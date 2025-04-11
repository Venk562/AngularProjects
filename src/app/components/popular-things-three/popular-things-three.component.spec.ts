import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularThingsThreeComponent } from './popular-things-three.component';

describe('PopularThingsThreeComponent', () => {
  let component: PopularThingsThreeComponent;
  let fixture: ComponentFixture<PopularThingsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularThingsThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularThingsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
