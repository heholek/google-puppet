//@ts-check

/**
 * @param {import("puppeteer").Page} page
 * @param {{email: string, password: string}} credentials
 * @returns {Promise<import("puppeteer").Page>} page
 *
 * @example
 *
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 * await page.goto("https://accounts.google.com");
 * await login(page, { email: "email@example.com", "password": "password" });
 */
exports.login = async (page, { email, password }) => {
  const emailInput = await page.waitForSelector('input[name="Email"]');
  await emailInput.type(email);
  const submitEmailButton = await page.waitForSelector("input#next");
  await submitEmailButton.click();
  const passwordInput = await page.waitForSelector("input#Passwd");
  await passwordInput.type(password);
  const submitPasswordButton = await page.waitForSelector("#signIn");
  await submitPasswordButton.click();
  return page;
};
