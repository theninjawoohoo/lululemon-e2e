import { Page, Locator } from '@playwright/test';
import customerInfo from '../interfaces/customerInfo.types';

class CheckoutPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly emailInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;

  readonly phoneInput: Locator;
  readonly addressInput: Locator; 
  readonly cityInput: Locator;
  readonly provinceDropdown: Locator; 
  readonly postalCodeInput: Locator;

  readonly nextStep: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    this.emailInput = page.getByTestId('email-label');
    this.firstNameInput = page.getByRole('textbox', { name: 'First name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name' });
    this.phoneInput = page.getByRole('textbox', { name: 'Phone number' });
    this.addressInput = page.getByRole('textbox', { name: 'Address', exact: true }); 
    this.cityInput = page.getByRole('textbox', { name: 'City' });
    this.provinceDropdown = page.getByTestId('shipping-state');
    this.postalCodeInput = page.getByRole('textbox', { name: 'Postal code' });
    this.nextStep = page.getByRole('button', { name: 'Go to next step.' });
  }

  async fillCustomerInfo(customerData: customerInfo) {
    await this.emailInput.fill(customerData.emailAddress);
    await this.firstNameInput.fill(customerData.firstName);
    await this.lastNameInput.fill(customerData.lastName);
    await this.phoneInput.fill(customerData.phoneNumber);
    await this.addressInput.fill(customerData.address);
    await this.cityInput.fill(customerData.city);
    await this.provinceDropdown.selectOption(customerData.province);
    await this.postalCodeInput.fill(customerData.postalCode);
  }
}

export default CheckoutPage;