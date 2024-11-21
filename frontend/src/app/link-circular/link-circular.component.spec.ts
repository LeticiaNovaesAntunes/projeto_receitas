import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCircularComponent } from './link-circular.component';

describe('LinkCircularComponent', () => {
  let component: LinkCircularComponent;
  let fixture: ComponentFixture<LinkCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkCircularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
