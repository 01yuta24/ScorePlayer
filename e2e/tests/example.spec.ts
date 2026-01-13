import { expect, test } from "@playwright/test";

test("ボタンを押すと /home に遷移する", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  const button = page.getByRole("button", { name: "スタート" });
  await button.click();
  await expect(page).toHaveURL("http://localhost:5173/home");
});
