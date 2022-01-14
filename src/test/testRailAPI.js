import {app} from "../config/config";
import {HEADER_FIELDS, REQUEST, STATUS_CODE} from "../components/components";


describe("TestRail API ", function () {
  it("Should get projects with login", function (done) {
    app
      .get(REQUEST.GET.PROJECTS)
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should get by email with login", function (done) {
    app
      .get(REQUEST.GET.BY_EMAIL)
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should creat new project with login", function (done) {
    app
      .post(REQUEST.POST.CREAT)
      .send({
        name: "New project using API",
        announcement: "This is the description for the project",
        show_announcement: true,
      })
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should delete new project with login", function (done) {
    app
      .post(REQUEST.POST.DELETE)
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .set(HEADER_FIELDS.CONTENT_TYPE, HEADER_FIELDS.APPLICATION_JSON)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should creat new section with login", function (done) {
    app
      .post(REQUEST.POST.SECTION)
      .send({
        suite_id: 1,
        name: "This is a new section",
      })
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should DELETE new section with login", function (done) {
    app
      .post(REQUEST.POST.DELETE_SECTION)
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .set(HEADER_FIELDS.CONTENT_TYPE, HEADER_FIELDS.APPLICATION_JSON)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should add new case with login", function (done) {
    app
      .post(REQUEST.POST.ADD_CASE)
      .send({
        section_id: 1,
        title: "Case using API",
      })
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .set(HEADER_FIELDS.CONTENT_TYPE, HEADER_FIELDS.APPLICATION_JSON)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should get cases with login", function (done) {
    app
      .get(REQUEST.GET.CASES)
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should DELETE new cases with login", function (done) {
    app
      .post(REQUEST.POST.DELETE_CASES)
      .send({
        case_ids: [5], // next id = 6
      })
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .set(HEADER_FIELDS.CONTENT_TYPE, HEADER_FIELDS.APPLICATION_JSON)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should get statuses with login", function (done) {
    app
      .get(REQUEST.GET.STATUSES)
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .expect(STATUS_CODE.OK, done);
  });

  it("Should get suites with login", function (done) {
    app
      .get(REQUEST.GET.SUITES)
      .set(HEADER_FIELDS.AUTHORIZATION.AUTH, HEADER_FIELDS.AUTHORIZATION.TOKEN)
      .expect(STATUS_CODE.OK, done);
  });
});
