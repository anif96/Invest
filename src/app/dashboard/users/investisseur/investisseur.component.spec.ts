import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestisseurComponent } from './investisseur.component';

describe('InvestisseurComponent', () => {
  let component: InvestisseurComponent;
  let fixture: ComponentFixture<InvestisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
