import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsComponent } from './albums.component';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let apiServiceMock: any;

  beforeEach(() => {
    component = new AlbumsComponent(
      apiServiceMock,
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
