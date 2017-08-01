import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideToolComponent } from './side-tool.component';

describe('SideToolComponent', () => {
  let component: SideToolComponent;
  let fixture: ComponentFixture<SideToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
