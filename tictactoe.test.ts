import { Builder, Capabilities, By } from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://localhost:4000");
});

afterAll(async () => {
  await driver.quit();
});

test("I can start a game", async () => {
  let button = await (await driver).findElement(By.id("start-game"));
  await button.click();
});

test("should add x to upper right box", async () => {
  const topRightBox = await (await driver).findElement(By.id("cell-2"));

  await topRightBox.click();
  await driver.sleep(3000);
});

test("should add x to center box", async () => {
  const centerBox = await (await driver).findElement(By.id("cell-4"));

  await centerBox.click();
  await driver.sleep(3000);
});

test("should add x to lower left box", async () => {
  const bottomLeftBox = await (await driver).findElement(By.id("cell-6"));

  await bottomLeftBox.click();
  await driver.sleep(3000);
});
