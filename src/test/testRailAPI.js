import {app, USER} from "../config/config";
import STATUS_CODES from "../constants/statusCodes";
import ENDPOINTS, {applyParams} from "../constants/endpoints";
import HEADERS from "../constants/headers";
import {TOKEN} from "../constants/components";
import CONTENT_TYPES from "../constants/contentTypes";
import {createProject} from "../services/projectService";

const {OK} = STATUS_CODES;

describe("TestRail API ", function () {
  it("Should get projects with login", function (done) {
    app
      .get(ENDPOINTS.GET.PROJECTS)
      .set(HEADERS.AUTHORIZATION, TOKEN)
      .expect(OK, done);
  });

  it("Should get by email with login", function (done) {

    const getUserByEmail=  `index.php?/api/v2/get_user_by_email&email=${USER.EMAIL}`;
    app
      .get(getUserByEmail)
      .set(HEADERS.AUTHORIZATION, TOKEN)
      .expect(OK, done);
  });

  it("Should creat new project with login", function (done) {
    app
      .post(ENDPOINTS.POST.CREAT)
      .send({
        name: "New project using API",
        announcement: "This is the description for the project",
        show_announcement: true,
      })
      .set(HEADERS.AUTHORIZATION, TOKEN)
      .expect(OK, done);
  });

  it("Should delete new project with login ", async function () {
    const project = await createProject();

    const id = project.body.id;
    app
      .post(`${ENDPOINTS.POST.DELETE}${id}`)
      .set(HEADERS.AUTHORIZATION, TOKEN)
      .set(HEADERS.CONTENT_TYPE, CONTENT_TYPES.APPLICATION_JSON)
      .expect(OK);

  });

  it("Should creat new section with login", function (done) {
    // TODO: Create suite and get id for section body
    app
      .post(ENDPOINTS.POST.SECTION)
      .send({
        suite_id: 1,
        name: "This is a new section",
      })
      .set(HEADERS.AUTHORIZATION, TOKEN)
      .expect(OK, done);
  });

  it("Should DELETE new section with login", function (done) {
    app
      .post(ENDPOINTS.POST.DELETE_SECTION)
      .set(HEADERS.AUTHORIZATION, TOKEN)
      .set(HEADERS.CONTENT_TYPE, CONTENT_TYPES.APPLICATION_JSON)
      .expect(OK, done);
  });

  it("Should add new case with login", function (done) {
    app
      .post(ENDPOINTS.POST.ADD_CASE)
      .send({
        section_id: 1,
        title: "Case using API",
      })
      .set(HEADERS.AUTHORIZATION, TOKEN)
      .set(HEADERS.CONTENT_TYPE, CONTENT_TYPES.APPLICATION_JSON)
      .expect(OK, done);
  });

  it("Should get cases with login", function (done) {
    app
      .get(ENDPOINTS.GET.CASES)
      .set(HEADERS.AUTHORIZATION, TOKEN)
      .expect(OK, done);
  });

  it("Should DELETE new cases with login", function (done) {
    const suiteId = 1;

    const url = applyParams(`${ENDPOINTS.POST.DELETE_CASES}${suiteId}`, [{paramName: 'soft', paramValue:'1'}]);

    app
      .post(url)
      .send({
        case_ids: [5], // next id = 6
      })
      .set(HEADERS.AUTHORIZATION, TOKEN)
      .set(HEADERS.CONTENT_TYPE, CONTENT_TYPES.APPLICATION_JSON)
      .expect(OK, done);
  });

  it("Should get statuses with login", function (done) {
    app
      .get(ENDPOINTS.GET.STATUSES)
      .set(HEADERS.AUTHORIZATION, TOKEN)
      .expect(OK, done);
  });

  it("Should get suites with login", function (done) {
    app
      .get(ENDPOINTS.GET.SUITES)
      .set(HEADERS.AUTHORIZATION, TOKEN)
      .expect(OK, done);
  });
});
