import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReceitaComponent } from './card-receita.component';

describe('CardReceitaComponent', () => {
  let component: CardReceitaComponent;
  let fixture: ComponentFixture<CardReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReceitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
