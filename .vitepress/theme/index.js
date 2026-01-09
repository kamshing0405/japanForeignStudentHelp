// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "./tailwind.css";
import "./style.css";

import PageTitle from "./components/PageTitle.vue";
import InfoCard from "./components/InfoCard.vue";
import ContentSection from "./components/ContentSection.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("PageTitle", PageTitle);
    app.component("InfoCard", InfoCard);
    app.component("ContentSection", ContentSection);
  },
};
