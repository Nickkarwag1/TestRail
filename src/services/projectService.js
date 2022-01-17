import { app } from "../config/config";
import ENDPOINTS from "../constants/endpoints";
import HEADERS from "../constants/headers";
import { TOKEN } from "../constants/components";
import STATUS_CODES from "../constants/statusCodes";
import { postRequest } from "../clients/restClient";
import { log } from "nodemon/lib/utils";

const DEFAULT_PROJECT = {
  name: "New project using API",
  announcement: "This is the description for the project",
  show_announcement: true,
};

async function createProject(project = DEFAULT_PROJECT) {
  return postRequest(ENDPOINTS.POST.CREAT, project).expect(STATUS_CODES.OK);
}

async function deleteProject(id) {
  if (!id) {
    return;
  }
  return postRequest(`${ENDPOINTS.POST.DELETE}${id}`).expect(STATUS_CODES.OK);
}

async function getAllProjects() {
  return app
    .get(ENDPOINTS.GET.PROJECTS)
    .set(HEADERS.AUTHORIZATION, TOKEN)
    .expect(STATUS_CODES.OK);
}

async function deleteAllProjects() {
  const allProjects = await (await getAllProjects()).body?.projects;
  let deleteProjectsPromises = [];
  if (allProjects) {
    const ids = [];
    for (let { id } of allProjects) {
      ids.push(id);
    }
    for (let id of ids) {
      const deleteProjectsPromise = deleteProject(id);
      deleteProjectsPromises.push(deleteProjectsPromise);
    }
  }

  return Promise.all(deleteProjectsPromises);
}

export { createProject, getAllProjects, deleteAllProjects };
