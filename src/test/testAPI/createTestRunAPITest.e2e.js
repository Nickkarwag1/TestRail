import {
  createProject,
  deleteAllProjects,
} from "../../services/projectService";
import log from "loglevel";
import { project } from "../../dataProject/randomDataProjects";
import {
  createSection,
  createSuite,
  createTestCase,
} from "../../services/testCaseService";
import { suite } from "../../dataProject/randomDataSuite";
import { createTestRun } from "../../services/testRunServices";
import { getCompanyName, getRandomBoolean } from "../../utils/faker";
import { logIn } from "../../pages/loginPage";
import { USER } from "../../config/config";
import { getCurrentUsername, openProject } from "../../pages/homePage";
import { expect } from "chai";
import { clickHeaderMenuItem } from "../../pages/projectPage/projectPageUi";
import { HEADERS_MENU_ITEM } from "../../pages/projectPage/labels";
import { isPageOpened } from "../../pages/isPageOpened";
import {
  openTestRun,
  TEST_RUNS_SELECTORS,
} from "../../pages/projectPage/testRuns&ResultsPageUi";

describe("Creat test run using API", async function () {
  before(async () => {
    log.enableAll();
  });
  let projectId, suiteId, sectionId, caseId, runName;

  it("Should creat new project with login ", async function () {
    const response = await createProject(project);
    projectId = response.body?.id;
  });

  it("Should create new suite", async function () {
    const response = await createSuite(projectId, suite);
    suiteId = response.body.id;
  });

  it("Should create new section", async function () {
    const section = {
      suite_id: suiteId,
      name: "Section using API",
    };

    const response = await createSection(projectId, section);
    sectionId = response.body.id;
  });

  it("Should create new test case", async function () {
    const response = await createTestCase(sectionId);
    caseId = response.body.id;
  });

  it("Should create new test run", async function () {
    const testRun = {
      suite_id: suiteId,
      name: getCompanyName(),
      include_all: getRandomBoolean(),
    };

    const response = await createTestRun(projectId, testRun);
    runName = response.body.name;
  });

  it("Validated create new test run", async function () {
    await browser.url("/");
    await logIn(USER);

    const username = await getCurrentUsername();
    expect(username).to.eql(USER.USERNAME);

    await clickHeaderMenuItem(HEADERS_MENU_ITEM.DASHBOARD);

    await openProject(project.name);

    await clickHeaderMenuItem(HEADERS_MENU_ITEM.TEST_RUNS_RESULTS);
    expect(
      await isPageOpened(TEST_RUNS_SELECTORS.TITLE_TEST_RUNS_RESULTS),
      "Should be opened page test runs & results"
    ).to.be.true;

    await openTestRun(runName);
  });
});
