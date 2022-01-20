import { createProject, deleteAllProjects } from "../services/projectService";
import { BASE_URL, USER } from "../config/config";
import { expect } from "chai";
import { logIn } from "../pages/loginPage";
import { getCurrentUsername, openProject } from "../pages/homePage";
import {
  getProductDescription,
  getCompanyName,
  getRandomBoolean,
} from "../utils/faker";

describe("Creat project using API", async function () {
  before(async () => {
    await deleteAllProjects();
  });
  let projectName;
  it("Should creat new project with login ", async function (done) {
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

    await openProject(projectName);
  });
});
