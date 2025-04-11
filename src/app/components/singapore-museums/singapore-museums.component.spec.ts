import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingaporeMuseumsComponent } from './singapore-museums.component';

describe('SingaporeMuseumsComponent', () => {
  let component: SingaporeMuseumsComponent;
  let fixture: ComponentFixture<SingaporeMuseumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingaporeMuseumsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingaporeMuseumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
