import log from "loglevel";

export default function element(selector) {
  const elem = $(selector);

  async function clickElement() {
    log.info(`Click element xpath: ${selector}`);
    await elem.waitForClickable({ timeout: 50000 });
    await elem.click();
  }

  async function getElementText() {
    const text = await elem.getText();
    log.info(`Get text ${text} in element xpath: ${selector}`);
    return text;
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
    const value = await elem.getValue();
    log.info(`Get value ${value} in element xpath: ${selector}`);
    return value;
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
