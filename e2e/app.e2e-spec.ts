import { UntitledPage } from './app.po';

describe('FindaBeer', function() {
  let page: UntitledPage;

  beforeEach(() => {
    page = new UntitledPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
