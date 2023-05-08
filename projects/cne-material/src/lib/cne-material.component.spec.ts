import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CneMaterialComponent } from './cne-material.component';

describe('CneMaterialComponent', () => {
  let component: CneMaterialComponent;
  let fixture: ComponentFixture<CneMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CneMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CneMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
