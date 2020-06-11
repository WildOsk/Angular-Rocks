import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandasInfoComponent } from './bandas-info.component';

describe('BandasInfoComponent', () => {
  let component: BandasInfoComponent;
  let fixture: ComponentFixture<BandasInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandasInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandasInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
