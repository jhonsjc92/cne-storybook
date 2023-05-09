import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CneTextBoxComponent } from './cne-text-box.component';

describe('CneTextBoxComponent', () => {
  let component: CneTextBoxComponent;
  let fixture: ComponentFixture<CneTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CneTextBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CneTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
