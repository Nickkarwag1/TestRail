import { postRequest } from "../clients/restClient";
import ENDPOINTS from "../constants/endpoints";
import STATUS_CODES from "../constants/statusCodes";

export async function createTestRun(projectId, testRun) {
  return postRequest(
    `${ENDPOINTS.POST.ADD_TEST_RUN}${projectId}`,
    testRun
  ).expect(STATUS_CODES.OK);
}
