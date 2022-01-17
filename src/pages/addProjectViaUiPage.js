import { ADD_PROJECT_SELECTOR } from "../constants/addProjectSelector";
import { SELECTOR } from "../services/projectService";

export function getAddProjectPage() {
  return $(SELECTOR.TITLE_ADD_PROJECT).getText();
}

export async function addProjectViaUi({
  name,
  announcement,
  show_announcement,
}) {
  await $(ADD_PROJECT_SELECTOR.NAME).addValue(name);
  await $(ADD_PROJECT_SELECTOR.ANNOUNCEMENT).addValue(announcement);
  await $(ADD_PROJECT_SELECTOR.SHOW_ANNOUNCEMENT).addValue(show_announcement);
  await $(ADD_PROJECT_SELECTOR.ACCEPT).click();
}
