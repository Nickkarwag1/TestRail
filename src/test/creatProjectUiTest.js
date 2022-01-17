import {
  deleteAllProjects,
  project,
  validateAnnouncementProject,
  validateNameProject,
} from "../services/projectService";
import { logIn } from "../pages/loginPage";
import { USER } from "../config/config";
import { clickAddProject, getCurrentUsername } from "../pages/homePage";
import { expect } from "chai";
import {
  addProjectViaUi,
  getAddProjectPage,
} from "../pages/addProjectViaUiPage";
import { clickEditProject } from "../pages/projectPageUi";

describe("Creat project UI test only", async function () {
  before(async () => {
    await deleteAllProjects();
  });
  it("Should login and create a new project UI test", async function (done) {
    await browser.url("/");
    await logIn(USER);

    const username = await getCurrentUsername();
    expect(username).to.eql(USER.USERNAME);

    await clickAddProject();
    const addProject = await getAddProjectPage();
    expect(addProject).to.eql("Add Project");

    await addProjectViaUi(project);
    await clickEditProject();

    await validateNameProject();
    await validateAnnouncementProject();
  });
});
