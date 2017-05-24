import { TemplateAngular2Page } from './app.po';

describe('template-angular2 App', () => {
  let page: TemplateAngular2Page;

  beforeEach(() => {
    page = new TemplateAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
