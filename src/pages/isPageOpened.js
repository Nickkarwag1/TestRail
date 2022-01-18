export function isPageOpened(selector) {
  return $(selector).waitForDisplayed();
}
