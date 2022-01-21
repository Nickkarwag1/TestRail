import element from "../../utils/element";

export const SELECTOR = {
  ADD_TEST_CASE: "#sidebar-cases-add",
  TITLE_TEST_CASE: "//div[contains(@class, 'page_title')]",
  EDIT_TEST_CASE: "//a[contains(@class, 'toolbar-button')]",
  CANCEL_EDIT_CASE: "//form[@id='form']//a[contains(@class, 'button-cancel')]",
};

const ADD_TEST_CASE_SELECTORS = {
  NAME: "//div[@class='form-group form-group-main']//input",
  ACCEPT: "#accept",
};

export async function clickAddTestCase() {
  await element(SELECTOR.ADD_TEST_CASE).clickElement();
}

export async function addTestCaseViaUi({ name }) {
  await element(ADD_TEST_CASE_SELECTORS.NAME).setValue(name);
  await element(ADD_TEST_CASE_SELECTORS.ACCEPT).clickElement();
}

export async function clickEditTestCase() {
  await element(SELECTOR.EDIT_TEST_CASE).clickElement();
}

export function getTestCaseName() {
  return element(ADD_TEST_CASE_SELECTORS.NAME).getElementValue();
}

export async function clickCancelEditTestCase() {
  await element(SELECTOR.CANCEL_EDIT_CASE).clickElement();
}
