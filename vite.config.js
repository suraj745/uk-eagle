import { resolve } from "path";

const root = resolve(__dirname, "src");

export default {
  optimizeDeps: {
    include: ["jquery"],
  },
  base: "/",
  build: {
    rollupOptions: {
      input: {
        index: "./main.js", // Common entry point for shared modules
        homePage: "/index.html", // Entry point for index.html
        aboutPage: "/pages/about-us.html", // Entry point for about.html
        teamPage: "/pages/our-team.html", // Entry point for team.html
        servicePage: "/pages/our-services.html",
        contactPage: "/pages/contact-us.html",
        agriculturePage: "/pages/our-businesses/agriculture.html",
        energyPage: "/pages/our-businesses/energy.html",
        infrastructurePage: "/pages/our-businesses/infrastructure.html",
        logisticsPage: "/pages/our-businesses/logistics.html",
        pharmaceuticalPage: "/pages/our-businesses/pharmaceutical.html",
        supermarketsPage: "/pages/our-businesses/supermarkets.html",
      },
    },
  },
};
