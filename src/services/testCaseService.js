import { postRequest } from "../clients/restClient";
import ENDPOINTS from "../constants/endpoints";
import STATUS_CODES from "../constants/statusCodes";

export const DEFAULT_TEST_CASE = {
  title: "New test case using API",
};

export async function createTestCase(sectionId, testCase = DEFAULT_TEST_CASE) {
  return postRequest(`${ENDPOINTS.POST.ADD_CASE}${sectionId}`, testCase).expect(
    STATUS_CODES.OK
  );
}

export async function createSuite(projectId, newSuite) {
  return postRequest(`${ENDPOINTS.POST.SUITE}${projectId}`, newSuite).expect(
    STATUS_CODES.OK
  );
}

export async function createSection(projectId, section) {
  return postRequest(`${ENDPOINTS.POST.SECTION}${projectId}`, section).expect(
    STATUS_CODES.OK
  );
}

export async function deleteTestCase(caseId) {
  return postRequest(`${ENDPOINTS.POST.DELETE_TEST_CASE}${caseId}`).expect(
    STATUS_CODES.OK
  );
}
