import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingaporeAttractionsComponent } from './singapore-attractions.component';

describe('SingaporeAttractionsComponent', () => {
  let component: SingaporeAttractionsComponent;
  let fixture: ComponentFixture<SingaporeAttractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingaporeAttractionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingaporeAttractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
