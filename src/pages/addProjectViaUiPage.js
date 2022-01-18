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
  await $(ADD_PROJECT_SELECTORS.NAME).addValue(name);
  await $(ADD_PROJECT_SELECTORS.ANNOUNCEMENT).addValue(announcement);
  await $(ADD_PROJECT_SELECTORS.SHOW_ANNOUNCEMENT).addValue(show_announcement);
  await $(ADD_PROJECT_SELECTORS.ACCEPT).click();
}
