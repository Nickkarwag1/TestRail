import element from "../../utils/element";

export const SELECTOR = {
  ADD_TEST_CASE: "#sidebar-cases-add",
  ADD_TEST_SUITES: "#navigation-suites-add",
  TITLE_TEST_CASE: "//div[contains(@class, 'page_title')]",
  EDIT_TEST_SUITES_AND_CASES: "//a[contains(@class, 'toolbar-button')]",
  CANCEL_EDIT_SUITE_OR_CASE: "//form[@id='form']//a[contains(@class, 'button-cancel')]",
  FIND_TEST_CASE_NAME: "//span[@class='title' and text()=",
  DELETE_TEST_CASE: "]/../../..//a[@class='deleteLink']",
  DELETE_PERMANENTLY:
    "//div[contains(@class,'ui-dialog')]//a[contains(@class,'button-black')]",
  CONFIRMATION_DELETE_PERMANENTLY:
    "//div[@id='casesDeletionConfirmationDialog']//a[contains(@class,'button-black')]",
};

const ADD_TEST_SUITES_OR_CASE_SELECTORS = {
  NAME: "//div[@class='form-group form-group-main']//input",
  DESCRIPTIONS_SUITES: "//form[@id='form']//div[@id='description_display']",
  ACCEPT: "#accept",
};

export async function clickAddTestSuites(){
  await element(SELECTOR.ADD_TEST_SUITES).clickElement();
}

export async function addTestSuiteViaUi({name, description}){
  await element(ADD_TEST_SUITES_OR_CASE_SELECTORS.NAME).setValue(name);
  await element(ADD_TEST_SUITES_OR_CASE_SELECTORS.DESCRIPTIONS_SUITES).setValue(description)
  await element(ADD_TEST_SUITES_OR_CASE_SELECTORS.ACCEPT).clickElement();
}

export async function clickEditTestSuite(){
  await element(SELECTOR.EDIT_TEST_SUITES_AND_CASES).clickElement()
}

export function getTestSuiteName() {
  return element(ADD_TEST_SUITES_OR_CASE_SELECTORS.NAME).getElementValue();
}

export function getTestSuiteDescription() {
  return element(ADD_TEST_SUITES_OR_CASE_SELECTORS.DESCRIPTIONS_SUITES).getElementText();
}

export async function clickCancelEditTestSuite() {
  await element(SELECTOR.CANCEL_EDIT_SUITE_OR_CASE).clickElement();
}

export async function clickAddTestCase() {
  await element(SELECTOR.ADD_TEST_CASE).clickElement();
}

export async function addTestCaseViaUi({ name }) {
  await element(ADD_TEST_SUITES_OR_CASE_SELECTORS.NAME).setValue(name);
  await element(ADD_TEST_SUITES_OR_CASE_SELECTORS.ACCEPT).clickElement();
}

export async function clickEditTestCase() {
  await element(SELECTOR.EDIT_TEST_SUITES_AND_CASES).clickElement();
}

export function getTestCaseName() {
  return element(ADD_TEST_SUITES_OR_CASE_SELECTORS.NAME).getElementValue();
}

export async function clickCancelEditTestCase() {
  await element(SELECTOR.CANCEL_EDIT_SUITE_OR_CASE).clickElement();
}

export async function findTestCaseNameAndDelete(testCaseName) {
  const elem = element(
    `${SELECTOR.FIND_TEST_CASE_NAME}'${testCaseName}'${SELECTOR.DELETE_TEST_CASE}`
  );
  await elem.moveToElement();
  await elem.clickElement();
}

export async function deleteTestCasePermanently() {
  await element(SELECTOR.DELETE_PERMANENTLY).clickElement();
  await element(SELECTOR.CONFIRMATION_DELETE_PERMANENTLY).clickElement();
}

export function isCaseInTestCase(testCaseName) {
  const elem = element(`${SELECTOR.FIND_TEST_CASE_NAME}'${testCaseName}']`);
  return elem.elementIsDisplayed();
}

export async function openTestCase(testCaseName) {
  await element(
    `${SELECTOR.FIND_TEST_CASE_NAME}'${testCaseName}']`
  ).clickElement();
}
