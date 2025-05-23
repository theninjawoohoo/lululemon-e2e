import { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const { BASE_URL } = process.env;
const baseURL = BASE_URL || 'https://shop.lululemon.com/en-ca/c/bags/n1rdci';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 60000,
  expect: {
    timeout: 20000,
  },
  reporter: [
    ['list'], 
    ['html', {open: 'never', outputFolder: 'reports'}],
    ['junit', {outputFile: 'reports/results.xml'}],
  ],
  use: {
    headless: true,
    actionTimeout: 0,
    baseURL: baseURL ?? 'https://shop.lululemon.com/en-ca/;',
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    bypassCSP: true,
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //     viewport: { width: 375, height: 812 },
    //   },
    // },
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //     viewport: { width: 412, height: 915 },
    //   },
    // }
  ],

  outputDir: './artifacts',
};

export default config;