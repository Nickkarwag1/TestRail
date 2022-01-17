import { createProject, deleteAllProjects } from "../services/projectService";
import { logIn } from "../pages/loginPage";
import { USER } from "../config/config";
import { clickAddProject, getCurrentUsername } from "../pages/homePage";
import { expect } from "chai";
import { addProjectUi, getCurrentAddProject } from "../pages/addProjectUiPage";
import {
  getCompanyName,
  getProductDescription,
  getRandomBoolean,
} from "../utils/faker";
import { getMilestones, getTestRuns } from "../pages/projectPageUi";

describe("Creat project using API only", async function () {
  before(async () => {
    await deleteAllProjects();
  });
  it("Should creat new project with login ", async function (done) {
    const project = {
      name: getCompanyName(),
      announcement: getProductDescription(),
      show_announcement: getRandomBoolean(),
    };

    await browser.url("/");
    await logIn(USER);

    const username = await getCurrentUsername();
    expect(username).to.eql(USER.USERNAME);

    await clickAddProject();
    const currentProject = await getCurrentAddProject();
    expect(currentProject).to.eql("Add Project");

    await addProjectUi(project);
    const testRuns = await getTestRuns();
    const milestones = await getMilestones();
    expect(testRuns).to.eql("Test Runs");
    expect(milestones).to.eql("Milestones");
  });
});
