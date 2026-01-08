import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/japanForeignStudentHelp/",
  title: "日本留学ガイド",
  vite: {
    plugins: [tailwindcss()],
  },
  description: "A VitePress Site",
  themeConfig: {
    outline: {
      label: "目次",
      level: [2, 3],
    },

    sidebarMenuLabel: "メニュー",

    returnToTopLabel: "トップに戻る",

    docFooter: {
      prev: "前の記事",
      next: "次の記事",
    },

    darkModeSwitchLabel: "外観",
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "検索",
            buttonAriaLabel: "検索",
          },
          modal: {
            noResultsText: "該当する結果はありません",
            resetButtonTitle: "条件をクリア",
            footer: {
              selectText: "選択",
              navigateText: "切り替え",
              closeText: "閉じる",
            },
          },
        },
      },
    },

    footer: {
      message: "",
      copyright: "copyright © 2026 KCGI group 35 All rights reserved.",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "日本の魅力", link: "/docs/なぜ日本？/なぜ日本？" },
      {
        text: "留学計画",
        items: [
          {
            text: "日本の教育制度",
            link: "/docs/学校について/01.日本の教育制度",
          },
          {
            text: "学校の種類",
            link: "/docs/学校について/02.日本の学校紹介",
          },
          {
            text: "関連する試験",
            link: "/docs/学校について/03.関連する試験",
          },
          { text: "留学費用", link: "/docs/学校について/04.留学費用" },
          { text: "奨学金", link: "/docs/学校について/05.奨学金" },
        ],
      },
      {
        text: "入国",
        items: [
          {
            text: "在留資格",
            link: "/docs/入国/01.在留資格",
          },
          { text: "来日前の準備", link: "/docs/入国/02.来日前の準備" },
          {
            text: "空港での流れ",
            link: "/docs/入国/03.空港での流れ",
          },
        ],
      },
      {
        text: "生活ガイド",
        items: [
          {
            text: "住民登録・医療保険",
            link: "/docs/生活ガイド/01.住民登録・医療保険",
          },
          {
            text: "口座開設・電話番号",
            link: "/docs/生活ガイド/02.口座開設・電話番号",
          },
          { text: "住まい", link: "/docs/生活ガイド/03.住まい" },
          { text: "緊急対応", link: "/docs/生活ガイド/04.緊急対応" },
          { text: "交通・通学", link: "/docs/生活ガイド/05.交通・通学" },
          { text: "ゴミ分別", link: "/docs/生活ガイド/06.ゴミ分別" },
          { text: "アルバイト", link: "/docs/生活ガイド/07.アルバイト" },
        ],
      },
      {
        text: "進路",
        items: [
          { text: "日本での就職", link: "/docs/卒業後の進路/01.就職活動" },
          {
            text: "帰国・海外就職",
            link: "/docs/卒業後の進路/06.帰国・海外就職",
          },
        ],
      },

      { text: "支援", link: "/docs/支援/支援・情報サイト" },
    ],

    sidebar: {
      "/docs/入国/": [
        {
          text: "入國・ビザ・準備",
          items: [
            {
              text: "在留資格",
              link: "/docs/入国/01.在留資格",
            },
            { text: "来日前の準備", link: "/docs/入国/02.来日前の準備" },
            {
              text: "空港での流れ",
              link: "/docs/入国/03.空港での流れ",
            },
          ],
        },
      ],
      "/docs/学校について/": [
        {
          text: "日本への留学計画",
          items: [
            {
              text: "日本の教育制度",
              link: "/docs/学校について/01.日本の教育制度",
            },
            {
              text: "学校の種類紹介",
              link: "/docs/学校について/02.日本の学校紹介",
            },
            {
              text: "関連する試験",
              link: "/docs/学校について/03.関連する試験",
            },
            { text: "留学費用", link: "/docs/学校について/04.留学費用" },
            {
              text: "奨学金",
              link: "/docs/学校について/05.奨学金",
            },
          ],
        },
      ],
      "/docs/生活ガイド/": [
        {
          text: "生活ガイド",
          items: [
            {
              text: "住民登録・医療保険",
              link: "/docs/生活ガイド/01.住民登録・医療保険",
            },
            {
              text: "口座開設・電話番号",
              link: "/docs/生活ガイド/02.口座開設・電話番号",
            },
            { text: "住まい", link: "/docs/生活ガイド/03.住まい" },
            { text: "緊急対応", link: "/docs/生活ガイド/04.緊急対応" },
            { text: "交通・通学", link: "/docs/生活ガイド/05.交通・通学" },
            { text: "ゴミ分別", link: "/docs/生活ガイド/06.ゴミ分別" },
            { text: "アルバイト", link: "/docs/生活ガイド/07.アルバイト" },
          ],
        },
      ],

      "/docs/卒業後の進路/": [
        {
          text: "卒業後の進路",
          items: [
            {
              text: "日本での就職",
              collapsed: true,
              items: [
                {
                  text: "就職活動",
                  link: "/docs/卒業後の進路/01.就職活動",
                },
                {
                  text: "会社制度",
                  link: "/docs/卒業後の進路/02.会社制度",
                },
                {
                  text: "就活の準備・募集要項",
                  link: "/docs/卒業後の進路/03.就活の準備・募集要項",
                },
                {
                  text: "採用選考の流れ",
                  link: "/docs/卒業後の進路/04.採用選考の流れ",
                },
                {
                  text: "在留資格の変更",
                  link: "/docs/卒業後の進路/05.在留資格の変更",
                },
              ],
            },
            {
              text: "帰国・海外就職",
              link: "/docs/卒業後の進路/06.帰国・海外就職",
            },
          ],
        },
      ],
    },
  },
});
