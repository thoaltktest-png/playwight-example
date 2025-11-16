// give me example test code for the file at path: tests/exa.spec.ts
import { test, expect } from '@playwright/test';
test('example test for exa.spec.ts', async ({ page }) => {
    await page.goto('https://example.com/');
    await expect(page).toHaveTitle(/Example Domain/);
});