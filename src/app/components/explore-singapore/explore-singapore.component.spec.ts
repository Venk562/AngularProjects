import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSingaporeComponent } from './explore-singapore.component';

describe('ExploreSingaporeComponent', () => {
  let component: ExploreSingaporeComponent;
  let fixture: ComponentFixture<ExploreSingaporeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreSingaporeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreSingaporeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
