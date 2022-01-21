import element from "../utils/element";

export function isPageOpened(selector) {
  return element(selector).elementWaitForDisplayed();
}
