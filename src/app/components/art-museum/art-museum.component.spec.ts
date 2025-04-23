import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtMuseumComponent } from './art-museum.component';

describe('ArtMuseumComponent', () => {
  let component: ArtMuseumComponent;
  let fixture: ComponentFixture<ArtMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtMuseumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
