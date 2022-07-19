import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationMemeOriginalComponent } from './creation-meme-original.component';

describe('CreationMemeOriginalComponent', () => {
  let component: CreationMemeOriginalComponent;
  let fixture: ComponentFixture<CreationMemeOriginalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationMemeOriginalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationMemeOriginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
