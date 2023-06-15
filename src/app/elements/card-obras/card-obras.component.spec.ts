import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardObrasComponent } from './card-obras.component';

describe('CardObrasComponent', () => {
  let component: CardObrasComponent;
  let fixture: ComponentFixture<CardObrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardObrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
