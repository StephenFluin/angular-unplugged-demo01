import { Ngpakistan001Page } from './app.po';

describe('ngpakistan001 App', function() {
  let page: Ngpakistan001Page;

  beforeEach(() => {
    page = new Ngpakistan001Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
