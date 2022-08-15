import { of } from 'rxjs';

import { JsonserviceService } from './jsonservice.service';

describe('JsonserviceService', () => {
  let service: JsonserviceService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn()
    }
    service = new JsonserviceService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getAlbums', () => {
    const res = 'Technopsworld'
    const url = 'https://jsonplaceholder.typicode.com/photos';
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getAlbums();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toBeCalledWith(url);
  })
});
