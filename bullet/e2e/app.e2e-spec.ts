import { BulletPage } from './app.po';

describe('bullet App', function() {
  let page: BulletPage;

  beforeEach(() => {
    page = new BulletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
