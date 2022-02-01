import { deleteAllProjects } from "../../services/projectService";
import { logIn } from "../../pages/loginPage";
import { USER } from "../../config/config";
import { clickAddProject, getCurrentUsername } from "../../pages/homePage";
import { expect } from "chai";
import {
  ADD_PROJECT_SELECTORS,
  addProjectViaUi,
} from "../../pages/addProjectViaUiPageAndSelectors";
import {
  clickCancelEditProject,
  clickEditProject,
  clickHeaderMenuItem,
  getProjectAnnouncement,
  getProjectName,
} from "../../pages/projectPage/projectPageUi";
import { isPageOpened } from "../../pages/isPageOpened";
import { maximize } from "../../utils/browserActions";
import { project } from "../../dataProject/randomDataProjects";
import {
  addTestCaseViaUi,
  clickAddTestCase,
  clickCancelEditTestCase,
  clickEditTestCase,
  getTestCaseName,
  SELECTOR,
} from "../../pages/projectPage/testCasePageUi";
import { testCase } from "../../dataProject/randomDataTestCase";
import { HEADERS_MENU_ITEM } from "../../pages/projectPage/labels";
import log from "loglevel";
import {
  addTestRunsViaUi,
  clearDefaultNameTestRuns,
  clickAddTestRuns,
  clickEditTestRuns,
  getTestRunName,
  TEST_RUNS_SELECTORS,
} from "../../pages/projectPage/testRuns&ResultsPageUi";
import { testRun } from "../../dataProject/randomDataTestRun";

describe("Create new project, create test case and create test runs & results UI test only", async function () {
  before(async () => {
    await deleteAllProjects();
    await maximize();
    log.enableAll();
  });
  it("Should be login and create a new project UI test", async function () {
    await browser.url("/");
    await logIn(USER);

    const username = await getCurrentUsername();
    expect(username).to.eql(USER.USERNAME);

    await clickAddProject();
    expect(
      await isPageOpened(ADD_PROJECT_SELECTORS.TITLE_ADD_PROJECT),
      "Page add project should be opened"
    ).to.be.true;

    await addProjectViaUi(project);
    await clickEditProject();

    const projectName = await getProjectName();
    const projectAnnouncement = await getProjectAnnouncement();

    expect(projectName).to.eql(project.name);
    expect(projectAnnouncement).to.eql(project.announcement);
  });

  it("Should be create test case UI test", async function () {
    await clickCancelEditProject();

    await clickHeaderMenuItem(HEADERS_MENU_ITEM.TEST_CASES);
    expect(
      await isPageOpened(SELECTOR.TITLE_TEST_CASE),
      "Should be opened page add test case"
    ).to.be.true;

    await clickAddTestCase();
    await addTestCaseViaUi(testCase);

    await clickEditTestCase();
    const testCaseName = await getTestCaseName();
    expect(testCaseName).to.eql(testCase.name);

    await clickCancelEditTestCase();
  });

  it("Should be create test runs & results UI test ", async function () {
    await clickHeaderMenuItem(HEADERS_MENU_ITEM.TEST_RUNS_RESULTS);
    expect(
      await isPageOpened(TEST_RUNS_SELECTORS.TITLE_TEST_RUNS_RESULTS),
      "Should be opened page test runs & results"
    ).to.be.true;

    await clickAddTestRuns();

    await clearDefaultNameTestRuns();
    await addTestRunsViaUi(testRun);

    await clickEditTestRuns();

    const testRunsName = await getTestRunName();
    expect(testRunsName).to.eql(testRun.name);
    await browser.pause(5000);
  });
});
