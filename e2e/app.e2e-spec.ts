import { AvanadePage } from './app.po';

describe('avanade App', () => {
  let page: AvanadePage;

  beforeEach(() => {
    page = new AvanadePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
