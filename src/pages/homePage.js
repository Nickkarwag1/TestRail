import element from "../utils/element";

const SELECTOR = {
  USERNAME: "//span[@class = 'navigation-username']",
  CLICK_ADD_PROJECT: "#sidebar-projects-add",
  OPEN_PROJECT: "//div[contains(@class, 'row project')]//a[text() = "
};

export function getCurrentUsername() {
  return element(SELECTOR.USERNAME).getElementText();
}

export async function openProject(projectName) {
  await element(`${SELECTOR.OPEN_PROJECT}'${projectName}']`).clickElement();
}

export async function clickAddProject() {
  await element(SELECTOR.CLICK_ADD_PROJECT).clickElement();
}
