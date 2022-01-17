export async function getCurrentAddProject() {
  return $("//div[contains(@class, 'content-header-title')]").getText();
}

export async function addProjectUi({ name, announcement, show_announcement }) {
  await $("#name").addValue(name);
  await $("#announcement").addValue(announcement);
  await $("#show_announcement").addValue(show_announcement);
  await $("#accept").click();
}
