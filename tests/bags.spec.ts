import { test, expect } from '@playwright/test';
import LuluStorePage from '../page-objects/LuluStorePage';
import LuluProductPage from '../page-objects/ProductPage';
import CheckoutPage from '../page-objects/CheckoutPage';

// External mock data
import customerData from '../mockData/CustomerInfo.json';
import customerInfo from '../interfaces/customerInfo.types';

// Utility functions
import NetworkUtils from '../utils/network';
test.describe('Lululemon Tracking Call Tests', () => {
  test.skip('User adds bag to cart and selects store to pick up', async ({ page }) => {
    await page.goto('');
    const luluStorePage = new LuluStorePage(page);
    await expect(luluStorePage.landingPageText).toContainText('Bags');
    const analyticsRequest = NetworkUtils.waitForAnalyticsCall(page, 'google', 'G-SF6ZTR8GW2');
    await luluStorePage.redirectToProductPage(0);
    const luluProductPage = new LuluProductPage(page);
    await analyticsRequest;
    console.log((await analyticsRequest).url());
    // await page.waitForTimeout(5000);
    // await luluProductPage.addToCardButton.click();

    // await luluProductPage.checkoutButton.click();
    // await expect(page).toHaveURL(/.*\/mybag/);

    // const testCustomer: customerInfo = customerData.testCustomer;  
    // const luluCheckoutPage = new CheckoutPage(page);
    // await luluCheckoutPage.checkoutButton.click();
    // await luluCheckoutPage.fillCustomerInfo(testCustomer);
    // await luluCheckoutPage.nextStep.click();

    // await page.waitForTimeout(60000);
  });

  test('User adds bag from home page and tracking event fires', async ({ page }) => {
    await page.goto('');
    await page.getByTestId('nav-desktop-search').fill('Tote Bag');
    await page.getByRole('link', { name: 'Daily Multi-Pocket Tote Bag' }).click();
    const trackingCall = NetworkUtils.waitForTrackingCall(page, '/v1/p');
    await trackingCall;
    console.log((await trackingCall).postData());
  });
});