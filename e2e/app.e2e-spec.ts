import { FreelanceCampFrontPage } from './app.po';

describe('freelance-camp-front App', () => {
  let page: FreelanceCampFrontPage;

  beforeEach(() => {
    page = new FreelanceCampFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
