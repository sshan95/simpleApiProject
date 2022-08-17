import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { JsonserviceService } from '../../services/jsonservice.service';
import { AlbumsComponent } from './albums.component';

describe('AlbumsComponent', () => {
  let fixture: any;
  let component: any;
  let serviceMock: any;

  beforeEach(() => {
    serviceMock = {
      getAlbums: jest.fn()
    };
    fixture = new AlbumsComponent(
      serviceMock
    );
    component = new AlbumsComponent(serviceMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should subscribe to service and apply data to albums', () => {
    const response = {
      name: 'Sam'
    }
    jest.spyOn(serviceMock, 'getAlbums').mockReturnValue(of(response));
    component.ngOnInit();
    expect(component.albums.name).toBe(response.name);
    expect(serviceMock.getAlbums).toBeCalled();
  })
});
