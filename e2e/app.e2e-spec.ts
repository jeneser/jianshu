import { JianshuPage } from './app.po';

describe('jianshu App', () => {
  let page: JianshuPage;

  beforeEach(() => {
    page = new JianshuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
