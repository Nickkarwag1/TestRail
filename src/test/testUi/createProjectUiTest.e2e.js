import { deleteAllProjects } from "../../services/projectService";
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
  clickEditProject,
  clickHeaderMenuItem,
  getProjectAnnouncement,
  getProjectName,
} from "../../pages/projectPage/projectPageUi";
import { isPageOpened } from "../../pages/isPageOpened";
import { maximize } from "../../utils/browserActions";
import { project } from "../../dataProject/randomDataProjects";
import log from "loglevel";
import { HEADERS_MENU_ITEM } from "../../pages/projectPage/labels";

describe("Creat project UI test", async function () {
  before(async () => {
    await maximize();
    log.enableAll();
  });
  it("Should login and create a new project UI test", async function () {
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
    expect(projectName).to.eql(project.name);

    const projectAnnouncement = await getProjectAnnouncement();
    expect(projectAnnouncement).to.eql(project.announcement);
  });
});
