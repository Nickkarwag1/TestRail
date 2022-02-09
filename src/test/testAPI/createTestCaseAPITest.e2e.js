import {
  createProject,
  deleteAllProjects,
} from "../../services/projectService";
import {
  createSection,
  createSuite,
  createTestCase,
  DEFAULT_TEST_CASE,
} from "../../services/testCaseService";
import { logIn } from "../../pages/loginPage";
import { USER } from "../../config/config";
import { getCurrentUsername, openProject } from "../../pages/homePage";
import { expect } from "chai";
import log from "loglevel";
import {clickHeaderMenuItem, openTestSuiteProject} from "../../pages/projectPage/projectPageUi";
import { openTestCase } from "../../pages/projectPage/testSuites&CasesPageUi";
import { project } from "../../dataProject/randomDataProjects";
import { suite } from "../../dataProject/randomDataSuite";
import {HEADERS_MENU_ITEM} from "../../pages/projectPage/labels";

describe("Creat test case using API", async function () {
  before(async () => {
    log.enableAll();
  });
  let projectId, suiteId, sectionId;

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
    await createTestCase(sectionId);
  });

  it("Validated created test case", async function () {
    await browser.url("/");
    await logIn(USER);

    const username = await getCurrentUsername();
    expect(username).to.eql(USER.USERNAME);

    await clickHeaderMenuItem(HEADERS_MENU_ITEM.DASHBOARD);

    await openProject(project.name);

    await openTestSuiteProject(suite.name);

    await openTestCase(DEFAULT_TEST_CASE.title);
  });
});
