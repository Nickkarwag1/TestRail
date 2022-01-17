import { ADD_PROJECT_SELECTOR } from "../constants/addProjectSelector";
import { SELECTOR } from "../services/projectService";

export async function clickEditProject() {
  await $(SELECTOR.EDIT_PROJECT).click();
}

export function getNameProject() {
  return $(ADD_PROJECT_SELECTOR.NAME).getValue();
}

export function getAnnouncementProject() {
  return $(ADD_PROJECT_SELECTOR.ANNOUNCEMENT).getValue();
}
