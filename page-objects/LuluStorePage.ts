import { Page, Locator } from '@playwright/test';

class LuluStorePage {
  readonly page: Page;
  readonly productList: Locator;
  readonly landingPageText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.landingPageText = page.getByRole('heading', { name: 'Bags', exact: true });
    this.productList = this.page.getByTestId('product-tile');
  }

  async redirectToProductPage(index: number) {
    await this.productList.nth(index).click();
  }
}

export default LuluStorePage;