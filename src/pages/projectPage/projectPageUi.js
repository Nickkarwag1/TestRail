import { ADD_PROJECT_SELECTORS } from "../addProjectViaUiPageAndSelectors";
import element from "../../utils/element";

export const SELECTOR = {
  EDIT_PROJECT: "//a[contains(@class, 'button-edit')]",
  CANCEL_EDIT_PROJECT:
    "//form[@id='form']//a[contains(@class, 'button-cancel')]",
  HEADER_MENU: "//div[@id='header']//a[normalize-space(text())= ",
};

export async function clickEditProject() {
  await element(SELECTOR.EDIT_PROJECT).clickElement();
}

export function getProjectName() {
  return element(ADD_PROJECT_SELECTORS.NAME).getElementValue();
}

export function getProjectAnnouncement() {
  return element(ADD_PROJECT_SELECTORS.ANNOUNCEMENT).getElementValue();
}

export async function clickCancelEditProject() {
  await element(SELECTOR.CANCEL_EDIT_PROJECT).clickElement();
}

export async function clickHeaderMenuItem(item) {
  await element(`${SELECTOR.HEADER_MENU}'${item}']`).clickElement();
}
