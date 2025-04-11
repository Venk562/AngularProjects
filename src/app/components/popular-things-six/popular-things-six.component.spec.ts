import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularThingsSixComponent } from './popular-things-six.component';

describe('PopularThingsSixComponent', () => {
  let component: PopularThingsSixComponent;
  let fixture: ComponentFixture<PopularThingsSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularThingsSixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularThingsSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
