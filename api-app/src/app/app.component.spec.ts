import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent()
  });
  
  describe('Setup Component', () => {
    it(`should have as title 'great'`, () => {
      component.title = 'great'
      expect(component.title).toEqual('great');
    });
  })
});
