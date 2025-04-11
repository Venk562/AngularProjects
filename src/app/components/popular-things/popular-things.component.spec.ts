import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularThingsComponent } from './popular-things.component';

describe('PopularThingsComponent', () => {
  let component: PopularThingsComponent;
  let fixture: ComponentFixture<PopularThingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularThingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
