import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(() => {
    component = new HeaderComponent;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Setup Component', () => {
    describe('ngOnInit', () => {
      it('should do nothing', () => {
        component.ngOnInit();
      })
    })
  })

});
