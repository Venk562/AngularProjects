import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularThingsOneComponent } from './popular-things-one.component';

describe('PopularThingsOneComponent', () => {
  let component: PopularThingsOneComponent;
  let fixture: ComponentFixture<PopularThingsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularThingsOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularThingsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
