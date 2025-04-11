import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingaporeZooComponent } from './singapore-zoo.component';

describe('SingaporeZooComponent', () => {
  let component: SingaporeZooComponent;
  let fixture: ComponentFixture<SingaporeZooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingaporeZooComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingaporeZooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
