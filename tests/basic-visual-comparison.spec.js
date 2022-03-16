const { test, expect } = require("@playwright/test");

// navigate the website with desktop & mobile with the major browsers on both dark & light themes & do visual comparison on each page for each condition
const pagesToCheck = [
  {
    url: "/",
    name: "homepage",
  },
  {
    url: "/posts/cors-proxy-in-preact/",
    name: "post-1",
  },
  {
    url: "/posts/defensive-coding-optional-chaining-nullish-coalescing/",
    name: "post-2",
  },
];
const themes = ["dark", "light"];

pagesToCheck.forEach((urlToCheck) => {
  themes.forEach((theme) => {
    test(`basic visual comparison - ${urlToCheck.name} - ${theme}`, async ({
      browser,
    }) => {
      const page = await browser.newPage({
        colorScheme: theme,
      });
      await page.goto(urlToCheck.url);
      await page.locator("html");
      expect(
        await page.screenshot({
          animations: "disabled",
        })
      ).toMatchSnapshot(`${urlToCheck.name}-${theme}.png`);
    });
  });
});
