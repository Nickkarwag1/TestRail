import { app } from "../config/config";

const PREFIX = "index.php?/";
const API = "api/";
const VERSION = "v2/";

const ENDPOINTS = {
  GET: {
    PROJECTS: buildFullRoute("get_projects"),
    BY_EMAIL: buildFullRoute("get_user_by_email"),
    CASES: buildFullRoute("get_cases/"),
    STATUSES: buildFullRoute("get_statuses"),
    SUITES: buildFullRoute("get_suite/"),
    USERS: buildFullRoute("get_users"),
  },
  POST: {
    CREAT: buildFullRoute("add_project"),
    DELETE: buildFullRoute("delete_project/"),
    SECTION: buildFullRoute("add_section/"),
    DELETE_SECTION: buildFullRoute("delete_section/"),
    ADD_CASE: buildFullRoute("add_case/"),
    // TODO: create function applyParams(url, [{paramName, paramValue}])
    DELETE_CASES: buildFullRoute("delete_cases/"),
    DELETE_TEST_CASE: buildFullRoute("delete_case/"),
    SUITE: buildFullRoute("add_suite/"),
    ADD_TEST_RUN: buildFullRoute('add_run/'),
  },
};

export function applyParams(url, params) {
  if (!url) {
    return;
  }
  let fullRoute = url + "/";
  for (let { paramName, paramValue } of params) {
    fullRoute += `&${paramName}=${paramValue}`;
  }
  return fullRoute;
}

function buildFullRoute(endpoint) {
  if (!endpoint) {
    return;
  }
  return `${PREFIX}${API}${VERSION}${endpoint}`;
}

export default ENDPOINTS;
