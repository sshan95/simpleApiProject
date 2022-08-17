import { AlbumComponent } from './album.component';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let windowSpy: any;

  beforeEach(() => {
    component = new AlbumComponent();
    windowSpy = jest.spyOn(window, "window", "get");
  });
  
  afterEach(() => {
    windowSpy.mockRestore();
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

  describe('redirectToUrl', () => {
    it('should go towards the url', () => {
      let el = document.createElement('div');
      el.setAttribute('data-id', 'https://via.placeholder.com/600/771796');
      window.open = jest.fn();
      component.url = "https://via.placeholder.com/600/771796";
      component.redirectToUrl(el);
      expect(window.open).toHaveBeenCalled()
      expect(component.url).toBe(component.redirectedUrl);
    })  
  })

});
