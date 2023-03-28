import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://beta-app.zujudigital.com",
    supportFile: false,
  },
  defaultCommandTimeout: 10000,
});
