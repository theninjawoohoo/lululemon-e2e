import { Page, Locator } from '@playwright/test';

class LuluProductPage {
  readonly page: Page;
  readonly addToCardButton: Locator;
  readonly pickUpInStoreDropdown: Locator;
  readonly firstPickUplocation: Locator;
  readonly checkoutButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.addToCardButton = page.getByTestId('purchase-method-container').getByRole('button', { name: 'Add to Bag' });
    this.pickUpInStoreDropdown = page.getByTestId('accordion-item-heading-wrapper-null');
    this.firstPickUplocation = page.locator('#accordion-radio-1-label');
    this.checkoutButton = page.getByRole('link', { name: 'View Bag & Checkout' });
  }
}

export default LuluProductPage;
