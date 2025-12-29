import { test, expect } from '@playwright/test';

test("ボタンを押すと /home に遷移する", async ({ page }) => {
  await page.goto("http://localhost:5173/");
    const button = page.getByRole("button", { name: "ボタン" });
    await button.click();
    await expect(page).toHaveURL("http://localhost:5173/home");
})
