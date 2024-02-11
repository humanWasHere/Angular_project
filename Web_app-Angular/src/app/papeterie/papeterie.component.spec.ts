import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapeterieComponent } from './papeterie.component';

describe('PapeterieComponent', () => {
  let component: PapeterieComponent;
  let fixture: ComponentFixture<PapeterieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PapeterieComponent]
    });
    fixture = TestBed.createComponent(PapeterieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
