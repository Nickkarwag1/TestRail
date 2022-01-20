const SELECTOR = {
  USERNAME: "//span[@class = 'navigation-username']",
  OPEN_PROJECT: `//div[contains(@class, 'row project')]//a[text() = '${projectName}']`,
  CLICK_ADD_PROJECT: "#sidebar-projects-add",
};

export function getCurrentUsername() {
  return $(SELECTOR.USERNAME).getText();
}

export async function openProject(projectName) {
  await $(SELECTOR.OPEN_PROJECT).click();
}

export async function clickAddProject() {
  await $(SELECTOR.CLICK_ADD_PROJECT).click();
}
