const HEADER_FIELDS = {
  AUTHORIZATION: {
    AUTH: "Authorization",
    TOKEN: "Basic bmlja2thcnNvc2lAZ21haWwuY29tOnZRZXpBOXBULjJ4NVZlZlFjaEJI",
  },
  CONTENT_TYPE: "Content-Type",
  APPLICATION_JSON: "application/json",
};

const REQUEST = {
  GET: {
    PROJECTS: `index.php?/api/v2/get_projects`,
    BY_EMAIL: `index.php?/api/v2/get_user_by_email&email=nickkarsosi@gmail.com`,
    CASES: `index.php?/api/v2/get_cases/1&suite_id=1`,
    STATUSES: `index.php?/api/v2/get_statuses`,
    SUITES: `index.php?/api/v2/get_suite/1`,
  },
  POST: {
    CREAT: `index.php?/api/v2/add_project`,
    DELETE: `index.php?/api/v2/delete_project/8`, // следующий ид = 8
    SECTION: `index.php?/api/v2/add_section/`,
    DELETE_SECTION: `index.php?/api/v2/delete_section/9`, // следующий id = 9
    ADD_CASE: `index.php?/api/v2/add_case/8`, // следующий ид = 8
    DELETE_CASES: `index.php?/api/v2/delete_cases/1&soft=1`,
  },
};

const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

export { HEADER_FIELDS, REQUEST, STATUS_CODE };
