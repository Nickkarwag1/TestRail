import {
  createProject,
  deleteAllProjects,
} from "../../services/projectService";
import { BASE_URL, USER } from "../../config/config";
import { expect } from "chai";
import { logIn } from "../../pages/loginPage";
import { getCurrentUsername, openProject } from "../../pages/homePage";
import {
  getProductDescription,
  getCompanyName,
  getRandomBoolean,
} from "../../utils/faker";
import log from "loglevel";
import { clickHeaderMenuItem } from "../../pages/projectPage/projectPageUi";
import { HEADERS_MENU_ITEM } from "../../pages/projectPage/labels";

describe("Creat project using API", async function () {
  before(async () => {
    await deleteAllProjects();
    log.enableAll();
  });
  let projectName;

  it("Should creat new project with login ", async function () {
    const project = {
      name: getCompanyName(),
      announcement: getProductDescription(),
      show_announcement: getRandomBoolean(),
    };

    const response = await createProject(project);
    projectName = response.body?.name;
  });
  it("Validate created project ", async function () {
    await browser.url("/");
    await logIn(USER);

    const username = await getCurrentUsername();
    expect(username).to.eql(USER.USERNAME);

    await clickHeaderMenuItem(HEADERS_MENU_ITEM.DASHBOARD);

    await openProject(projectName);
  });
});
