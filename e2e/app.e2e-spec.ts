import { RoutesNestedPage } from './app.po';

describe('routes-nested App', function() {
  let page: RoutesNestedPage;

  beforeEach(() => {
    page = new RoutesNestedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
