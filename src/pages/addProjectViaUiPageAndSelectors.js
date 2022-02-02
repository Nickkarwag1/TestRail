import element from "../utils/element";

export const ADD_PROJECT_SELECTORS = {
  NAME: "#name",
  ANNOUNCEMENT: "#announcement",
  SHOW_ANNOUNCEMENT: "#show_announcement",
  ACCEPT: "#accept",
  TITLE_ADD_PROJECT: "//div[contains(@class, 'content-header-title')]",
};

export async function addProjectViaUi({
  name,
  announcement,
  show_announcement,
}) {
  await element(ADD_PROJECT_SELECTORS.NAME).setValue(name);
  await element(ADD_PROJECT_SELECTORS.ANNOUNCEMENT).setValue(announcement);
  await element(ADD_PROJECT_SELECTORS.SHOW_ANNOUNCEMENT).setValue(show_announcement);
  await element(ADD_PROJECT_SELECTORS.ACCEPT).clickElement();
}
