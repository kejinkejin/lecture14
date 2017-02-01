import { ExePage } from './app.po';

describe('exe App', function() {
  let page: ExePage;

  beforeEach(() => {
    page = new ExePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
