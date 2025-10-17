import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreCollection } from './genre-collection';

describe('GenreCollection', () => {
  let component: GenreCollection;
  let fixture: ComponentFixture<GenreCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreCollection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
