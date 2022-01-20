import { ADD_PROJECT_SELECTORS } from "../addProjectViaUiPageAndSelectors";

export const SELECTOR = {
  EDIT_PROJECT: "//a[contains(@class, 'button-edit')]",
  CANCEL_EDIT_PROJECT:
    "//form[@id='form']//a[contains(@class, 'button-cancel')]",
  HEADER_MENU: "//div[@id='header']//a[normalize-space(text())= ",
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

export async function clickCancelEditProject() {
  await $(SELECTOR.CANCEL_EDIT_PROJECT).click();
}

export async function clickHeaderMenuItem(item) {
  await $(`${SELECTOR.HEADER_MENU}'${item}']`).click();
}
