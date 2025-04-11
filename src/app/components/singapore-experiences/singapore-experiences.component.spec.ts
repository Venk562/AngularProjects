import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingaporeExperiencesComponent } from './singapore-experiences.component';

describe('SingaporeExperiencesComponent', () => {
  let component: SingaporeExperiencesComponent;
  let fixture: ComponentFixture<SingaporeExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingaporeExperiencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingaporeExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
