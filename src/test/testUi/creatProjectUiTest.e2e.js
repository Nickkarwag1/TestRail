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
  clickEditProject,
  getProjectAnnouncement,
  getProjectName,
} from "../../pages/projectPage/projectPageUi";
import { isPageOpened } from "../../pages/isPageOpened";
import { maximize } from "../../utils/browserActions";
import { project } from "../../dataProject/randomDataProjects";
import log from "loglevel";

describe("Creat project UI test", async function () {
  before(async () => {
    await deleteAllProjects();
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
    await clickEditProject();

    const projectName = await getProjectName();
    expect(projectName).to.eql(project.name);

    const projectAnnouncement = await getProjectAnnouncement();
    expect(projectAnnouncement).to.eql(project.announcement);
  });
});
