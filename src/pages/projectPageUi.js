import { ADD_PROJECT_SELECTORS } from "./addProjectViaUiPage";

export const SELECTOR = {
  EDIT_PROJECT: "//a[contains(@class, 'button-edit')]",
};

export async function clickEditProject() {
  await $(SELECTOR.EDIT_PROJECT).click();
}

export function getProjectName() {
  return $(ADD_PROJECT_SELECTORS.NAME).getValue();
}

export function getProjectAnnouncement() {
  return $(ADD_PROJECT_SELECTORS.ANNOUNCEMENT).getValue();
}
