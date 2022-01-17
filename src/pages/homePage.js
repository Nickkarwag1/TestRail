export function getCurrentUsername() {
  return $("//span[@class = 'navigation-username']").getText();
}

export async function openProject(projectName) {
  await $(
    `//div[contains(@class, 'row project')]//a[text() = '${projectName}']`
  ).click();
}

export async function clickAddProject() {
  await $("#sidebar-projects-add").click();
}
