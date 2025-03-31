import { test, expect } from "@playwright/test";

test("should render and click the Ajouter button", async ({ page }) => {
  await page.goto("/");

  const button = page.getByTestId("submit-button");
  await button.click();

  await expect(button).toBeVisible();

  await expect(button).toHaveText("Ajouter");

  const form = page.getByTestId("form");

  await expect(form).toBeVisible();
});
