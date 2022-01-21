import log from "loglevel";

export default function element(selector) {
  const elem = $(selector);

  async function clickElement() {
    log.info(`Click element xpath: ${selector}`);
    await elem.waitForClickable({ timeout: 50000 });
    await elem.click();
  }

  async function getElementText() {
    log.info(`Get text element xpath: ${selector}`);
    return elem.getText();
  }

  async function setValue(value) {
    log.info(`Add value ${value} in element xpath: ${selector}`);
    await elem.waitForEnabled();
    await elem.addValue(value);
  }

  async function moveToElement() {
    log.info(`Move to element xpath: ${selector}`);
    await elem.moveTo();
  }

  async function elementWaitForDisplayed() {
    log.info(`Element is displayed xpath: ${selector}`);
    return elem.waitForDisplayed();
  }

  async function getElementValue() {
    log.info(`Get value element xpath: ${selector}`);
    return elem.getValue();
  }

  return {
    clickElement,
    getElementText,
    setValue,
    moveToElement,
    elementWaitForDisplayed,
    getElementValue,
  };
}
