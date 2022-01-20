const SELECTOR = {
  USERNAME: "//span[@class = 'navigation-username']",
  CLICK_ADD_PROJECT: "#sidebar-projects-add",
  OPEN_PROJECT: "//div[contains(@class, 'row project')]//a[text() = "
};

export function getCurrentUsername() {
  return $(SELECTOR.USERNAME).getText();
}

export async function openProject(projectName) {
  await $(`${SELECTOR.OPEN_PROJECT}'${projectName}']`).click();
}

export async function clickAddProject() {
  await $(SELECTOR.CLICK_ADD_PROJECT).click();
}
