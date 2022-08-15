import { AlbumComponent } from './album.component';

describe('AlbumComponent', () => {
  let component: AlbumComponent;

  beforeEach(() => {
    component = new AlbumComponent()
  });

  describe('Setup Component', () => {
    describe('ngOnInit', () => {
      it('should do nothing', () => {
        component.ngOnInit();
      })
    })
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
