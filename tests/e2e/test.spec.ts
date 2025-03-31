import { test, expect } from "@playwright/test";

test("Should allow me to remove todo items", async ({ page }) => {
  // Delete todo
  // Get the first element
  const firstTodoElement = page
    .getByTestId("todo-element")
    .filter({ hasText: "Hello la todo" });

  // Get the first remove button
  const removeTodoButton = firstTodoElement
    .getByTestId("remove-todo-button")
    .first();
  await removeTodoButton.click();

  // Make sure that the list now has remove the first item.
  await expect(firstTodoElement).toBeHidden();
  await expect(page.getByTestId("todo-element")).toHaveCount(1);
});
