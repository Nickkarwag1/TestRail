import element from "../../utils/element";

export const TEST_RUNS_SELECTORS = {
  TITLE_TEST_RUNS_RESULTS: "//div[contains(@class, 'page_title')]",
  ADD_TEST_RUNS: "#navigation-runs-add",
  EDIT_TEST_RUN: "//a[contains(@class, 'button-edit')]",
  OPEN_TEST_RUN: "//div[@id='open']//a[text()= ",
  CONFIRMATION_SUITES: "//button[contains(@class, 'button-left')]",
};

const ADD_TEST_RUNS_SELECTORS = {
  NAME: "//div[@class='form-group form-group-main']//input",
  ACCEPT: "#accept",
};

export async function clickAddTestRuns() {
  await element(TEST_RUNS_SELECTORS.ADD_TEST_RUNS).clickElement();
}

export async function clickTheConfirmationSuites(){
  await element(TEST_RUNS_SELECTORS.CONFIRMATION_SUITES).clickElement();
}

export async function getTestRunName() {
  return element(ADD_TEST_RUNS_SELECTORS.NAME).getElementValue();
}

export async function clearDefaultNameTestRuns() {
  await element(ADD_TEST_RUNS_SELECTORS.NAME).elementClearValue();
}

export async function addTestRunsViaUi({ name }) {
  await element(ADD_TEST_RUNS_SELECTORS.NAME).setValue(name);
  const elem = element(ADD_TEST_RUNS_SELECTORS.ACCEPT);
  await elem.scrollToElement();
  await elem.clickElement();
}

export async function clickEditTestRuns() {
  await element(TEST_RUNS_SELECTORS.EDIT_TEST_RUN).clickElement();
}

export async function openTestRun(testRunName) {
  await element(
    `${TEST_RUNS_SELECTORS.OPEN_TEST_RUN}'${testRunName}']`
  ).clickElement();
}
