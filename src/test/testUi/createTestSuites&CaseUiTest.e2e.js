import { logIn } from "../../pages/loginPage";
import { USER } from "../../config/config";
import {
  clickAddProject,
  getCurrentUsername,
  openProject,
} from "../../pages/homePage";
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
  addTestSuiteViaUi,
  clickAddTestCase,
  clickAddTestSuites,
  clickCancelEditTestCase,
  clickCancelEditTestSuite,
  clickEditTestCase,
  clickEditTestSuite,
  getTestCaseName,
  getTestSuiteDescription,
  getTestSuiteName,
  SELECTOR,
} from "../../pages/projectPage/testSuites&CasesPageUi";
import { testCase } from "../../dataProject/randomDataTestCase";
import { HEADERS_MENU_ITEM } from "../../pages/projectPage/labels";
import log from "loglevel";
import { suite } from "../../dataProject/randomDataSuite";

describe("Create new project and create test case UI test", async function () {
  before(async () => {
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

    await clickHeaderMenuItem(HEADERS_MENU_ITEM.DASHBOARD);
    await openProject(project.name);
    await clickEditProject();

    const projectName = await getProjectName();
    const projectAnnouncement = await getProjectAnnouncement();

    expect(projectName).to.eql(project.name);
    expect(projectAnnouncement).to.eql(project.announcement);
  });

  it("Should be creat test suite UI test", async function () {
    await clickCancelEditProject();

    await clickHeaderMenuItem(HEADERS_MENU_ITEM.TEST_SUITES_CASES);
    expect(
      await isPageOpened(SELECTOR.TITLE_TEST_CASE),
      "Should be opened page add test case"
    ).to.be.true;

    await clickAddTestSuites();
    await addTestSuiteViaUi(suite);
    await clickEditTestSuite();

    const suiteName = await getTestSuiteName();
    const suiteDescription = await getTestSuiteDescription();

    expect(suiteName).to.eql(suite.name);
    expect(suiteDescription).to.eql(suite.description);

    await clickCancelEditTestSuite();
  });

  it("Should be creat test case UI test", async function () {
    await clickAddTestCase();
    await addTestCaseViaUi(testCase);

    await clickEditTestCase();
    const testCaseName = await getTestCaseName();
    expect(testCaseName).to.eql(testCase.name);

    await clickCancelEditTestCase();
  });
});
