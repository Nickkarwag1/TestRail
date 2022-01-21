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
  await $(SELECTOR.ADD_TEST_CASE).click();
}

export async function addTestCaseViaUi({ name }) {
  await $(ADD_TEST_CASE_SELECTORS.NAME).addValue(name);
  await $(ADD_TEST_CASE_SELECTORS.ACCEPT).click();
}

export async function clickEditTestCase() {
  await $(SELECTOR.EDIT_TEST_CASE).click();
}

export function getTestCaseName() {
  return $(ADD_TEST_CASE_SELECTORS.NAME).getValue();
}

export async function clickCancelEditTestCase() {
  await $(SELECTOR.CANCEL_EDIT_CASE).click();
}
