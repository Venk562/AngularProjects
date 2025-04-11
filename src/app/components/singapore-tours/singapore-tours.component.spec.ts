import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingaporeToursComponent } from './singapore-tours.component';

describe('SingaporeToursComponent', () => {
  let component: SingaporeToursComponent;
  let fixture: ComponentFixture<SingaporeToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingaporeToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingaporeToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
