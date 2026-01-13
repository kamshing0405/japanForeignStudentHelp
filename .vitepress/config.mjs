import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/japanForeignStudentHelp/",
  title: "日本留学ガイド",
  vite: {
    plugins: [tailwindcss()],
  },

  locales: {
    root: {
      label: "日本語",
      lang: "ja-JP",
      title: "日本留学ガイド",

      description: "日本留学のための総合ガイド",
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
          { text: "日本の魅力", link: "/docs/whyjp/whyjp" },
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
              { text: "交通・通学", link: "/docs/生活ガイド/05.交通・通学" },
              { text: "ゴミ分別", link: "/docs/生活ガイド/06.ゴミ分別" },
              { text: "アルバイト", link: "/docs/生活ガイド/07.アルバイト" },
              { text: "緊急対応", link: "/docs/生活ガイド/04.緊急対応" },
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
                { text: "交通・通学", link: "/docs/生活ガイド/05.交通・通学" },
                { text: "ゴミ分別", link: "/docs/生活ガイド/06.ゴミ分別" },
                { text: "アルバイト", link: "/docs/生活ガイド/07.アルバイト" },
                { text: "緊急対応", link: "/docs/生活ガイド/04.緊急対応" },
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
    },

    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      title: "Japan Study Guide",
      description: "A comprehensive guide for studying in Japan",
      themeConfig: {
        outline: { label: "On this page", level: [2, 3] },
        sidebarMenuLabel: "Menu",
        returnToTopLabel: "Back to top",
        docFooter: { prev: "Previous page", next: "Next page" },
        darkModeSwitchLabel: "Appearance",
        search: {
          provider: "local",
          options: {
            translations: {
              button: {
                buttonText: "Search",
                buttonAriaLabel: "Search",
              },
              modal: {
                noResultsText: "No results found",
                resetButtonTitle: "Clear conditions",
                footer: {
                  selectText: "Select",
                  navigateText: "Navigate",
                  closeText: "Close",
                },
              },
            },
          },
        },

        footer: {
          message: "",
          copyright: "copyright © 2026 KCGI group 35 All rights reserved.",
        },

        nav: [
          { text: "Why JP", link: "/en/docs/whyjp/whyjp" },
          {
            text: "Study Plan",
            items: [
              {
                text: "Education system",
                link: "/en/docs/学校について/01.日本の教育制度",
              },
              {
                text: "Type of School",
                link: "/en/docs/学校について/02.日本の学校紹介",
              },
              {
                text: "Related exams",
                link: "en/docs/学校について/03.関連する試験",
              },
              { text: "Study cost", link: "/en/docs/学校について/04.留学費用" },
              { text: "scholarship", link: "/en/docs/学校について/05.奨学金" },
            ],
          },
          {
            text: "Entry",
            items: [
              {
                text: "Visa",
                link: "/en/docs/入国/01.在留資格",
              },
              { text: "Prepartion", link: "/en/docs/入国/02.来日前の準備" },
              {
                text: "Airport Procedures",
                link: "/en/docs/入国/03.空港での流れ",
              },
            ],
          },
          {
            text: "Living",
            items: [
              {
                text: "Resident Registration",
                link: "/en/docs/生活ガイド/01.住民登録・医療保険",
              },
              {
                text: "Bank Account・Phone No",
                link: "/en/docs/生活ガイド/02.口座開設・電話番号",
              },
              { text: "Living Room", link: "/en/docs/生活ガイド/03.住まい" },
              {
                text: "Transportation",
                link: "en/docs/生活ガイド/05.交通・通学",
              },
              {
                text: "Garbage sorting",
                link: "/en/docs/生活ガイド/06.ゴミ分別",
              },
              {
                text: "Part-time job",
                link: "/en/docs/生活ガイド/07.アルバイト",
              },
              {
                text: "Emergency Response",
                link: "/en/docs/生活ガイド/04.緊急対応",
              },
            ],
          },
          {
            text: "Career",
            items: [
              {
                text: "Work in Japan",
                link: "en/docs/卒業後の進路/01.就職活動",
              },
              {
                text: "Return・Work overseas",
                link: "/en/docs/卒業後の進路/06.帰国・海外就職",
              },
            ],
          },

          { text: "Support", link: "/en/docs/支援/支援・情報サイト" },
        ],

        sidebar: {
          "/en/docs/入国/": [
            {
              text: "Preparation before entry Japan",
              items: [
                {
                  text: "Visa",
                  link: "/en/docs/入国/01.在留資格",
                },
                { text: "Prepartion", link: "/en/docs/入国/02.来日前の準備" },
                {
                  text: "Airport Procedures",
                  link: "/en/docs/入国/03.空港での流れ",
                },
              ],
            },
          ],
          "/en/docs/学校について/": [
            {
              text: "Study Plan",
              items: [
                {
                  text: "Education System",
                  link: "/en/docs/学校について/01.日本の教育制度",
                },
                {
                  text: "Type Of School",
                  link: "/en/docs/学校について/02.日本の学校紹介",
                },
                {
                  text: "Related Exams",
                  link: "/en/docs/学校について/03.関連する試験",
                },
                {
                  text: "Study Cost",
                  link: "/en/docs/学校について/04.留学費用",
                },
                {
                  text: "Scholarship",
                  link: "/en/docs/学校について/05.奨学金",
                },
              ],
            },
          ],
          "/en/docs/生活ガイド/": [
            {
              text: "Living Guide",
              items: [
                {
                  text: "Resident Registration",
                  link: "/en/docs/生活ガイド/01.住民登録・医療保険",
                },
                {
                  text: "Bank Account・Phone No",
                  link: "/en/docs/生活ガイド/02.口座開設・電話番号",
                },
                { text: " Housing", link: "/en/docs/生活ガイド/03.住まい" },
                {
                  text: "Transportation",
                  link: "/en/docs/生活ガイド/05.交通・通学",
                },
                {
                  text: "Garbage sorting",
                  link: "/en/docs/生活ガイド/06.ゴミ分別",
                },
                {
                  text: "Part-time job",
                  link: "/en/docs/生活ガイド/07.アルバイト",
                },
                {
                  text: "Emergency response",
                  link: "/en/docs/生活ガイド/04.緊急対応",
                },
              ],
            },
          ],

          "/en/docs/卒業後の進路/": [
            {
              text: "Career",
              items: [
                {
                  text: "Work in Japan",
                  collapsed: true,
                  items: [
                    {
                      text: "Job Searching",
                      link: "/en/docs/卒業後の進路/01.就職活動",
                    },
                    {
                      text: "Corporate System",
                      link: "/en/docs/卒業後の進路/02.会社制度",
                    },
                    {
                      text: "Prepare for job searching",
                      link: "/en/docs/卒業後の進路/03.就活の準備・募集要項",
                    },
                    {
                      text: "Recruitment process",
                      link: "/en/docs/卒業後の進路/04.採用選考の流れ",
                    },
                    {
                      text: "Change of residence status",
                      link: "/en/docs/卒業後の進路/05.在留資格の変更",
                    },
                  ],
                },
                {
                  text: "Return・Work overseas",
                  link: "/en/docs/卒業後の進路/06.帰国・海外就職",
                },
              ],
            },
          ],
        },
      },
    },

    zhtw: {
      label: "繁體中文",
      lang: "zh-TW",
      link: "/zhtw/",
      title: "日本留學指南",
      description: "全方位的日本留學規劃與建議",
      themeConfig: {
        outline: { label: "本頁目錄", level: [2, 3] },
        sidebarMenuLabel: "選單",
        returnToTopLabel: "回到頂部",
        docFooter: { prev: "上一篇", next: "下一篇" },
        darkModeSwitchLabel: "外觀切換",
        search: {
          provider: "local",
          options: {
            translations: {
              button: {
                buttonText: "搜尋",
                buttonAriaLabel: "搜尋",
              },
              modal: {
                noResultsText: "找不到相關結果",
                resetButtonTitle: "清除搜尋條件",
                footer: {
                  selectText: "選擇",
                  navigateText: "切換",
                  closeText: "關閉",
                },
              },
            },
          },
        },

        footer: {
          message: "",
          copyright: "copyright © 2026 KCGI group 35 All rights reserved.",
        },

        nav: [
          { text: "為什麼選擇日本", link: "zhtw/docs/whyjp/whyjp" },
          {
            text: "留學計劃",
            items: [
              {
                text: "教育系統制度",
                link: "zhtw/docs/学校について/01.日本の教育制度",
              },
              {
                text: "學校種類",
                link: "zhtw/docs/学校について/02.日本の学校紹介",
              },
              {
                text: "相關考試",
                link: "zhtw/docs/学校について/03.関連する試験",
              },
              { text: "費用", link: "zhtw/docs/学校について/04.留学費用" },
              { text: "獎學金", link: "zhtw/docs/学校について/05.奨学金" },
            ],
          },
          {
            text: "入境",
            items: [
              {
                text: "簽證",
                link: "/zhtw/docs/入国/01.在留資格",
              },
              { text: "入境前準備", link: "/zhtw/docs/入国/02.来日前の準備" },
              {
                text: "機場入境流程",
                link: "/zhtw/docs/入国/03.空港での流れ",
              },
            ],
          },
          {
            text: "生活",
            items: [
              {
                text: "住民登記",
                link: "/zhtw/docs/生活ガイド/01.住民登録・医療保険",
              },
              {
                text: "銀行・電話號碼",
                link: "/zhtw/docs/生活ガイド/02.口座開設・電話番号",
              },
              { text: "居住", link: "/zhtw/docs/生活ガイド/03.住まい" },
              {
                text: "交通",
                link: "/zhtw/docs/生活ガイド/05.交通・通学",
              },
              {
                text: "垃圾分類",
                link: "/zhtw/docs/生活ガイド/06.ゴミ分別",
              },
              {
                text: "兼職工作",
                link: "/zhtw/docs/生活ガイド/07.アルバイト",
              },
              {
                text: "緊急情況應對",
                link: "/zhtw/docs/生活ガイド/04.緊急対応",
              },
            ],
          },
          {
            text: "工作",
            items: [
              {
                text: "在日工作",
                link: "/zhtw/docs/卒業後の進路/01.就職活動",
              },
              {
                text: "回國・海外工作",
                link: "/zhtw/docs/卒業後の進路/06.帰国・海外就職",
              },
            ],
          },

          { text: "支援", link: "/zhtw/docs/支援/支援・情報サイト" },
        ],

        sidebar: {
          "/zhtw/docs/入国/": [
            {
              text: "入境",
              items: [
                {
                  text: "簽證",
                  link: "/zhtw/docs/入国/01.在留資格",
                },
                { text: "入境前準備", link: "/zhtw/docs/入国/02.来日前の準備" },
                {
                  text: "機場入境流程",
                  link: "/zhtw/docs/入国/03.空港での流れ",
                },
              ],
            },
          ],
          "/zhtw/docs/学校について/": [
            {
              text: "留學計劃",
              items: [
                {
                  text: "教育系統制度",
                  link: "/zhtw/docs/学校について/01.日本の教育制度",
                },
                {
                  text: "學校種類",
                  link: "/zhtw/docs/学校について/02.日本の学校紹介",
                },
                {
                  text: "相關考試",
                  link: "/zhtw/docs/学校について/03.関連する試験",
                },
                {
                  text: "費用",
                  link: "/zhtw/docs/学校について/04.留学費用",
                },
                {
                  text: "獎學金",
                  link: "/zhtw/docs/学校について/05.奨学金",
                },
              ],
            },
          ],
          "/zhtw/docs/生活ガイド/": [
            {
              text: "生活",
              items: [
                {
                  text: "住民登記",
                  link: "/zhtw/docs/生活ガイド/01.住民登録・医療保険",
                },
                {
                  text: "銀行・電話號碼",
                  link: "/zhtw/docs/生活ガイド/02.口座開設・電話番号",
                },
                { text: "居住", link: "/zhtw/docs/生活ガイド/03.住まい" },
                {
                  text: "交通",
                  link: "/zhtw/docs/生活ガイド/05.交通・通学",
                },
                {
                  text: "垃圾分類",
                  link: "/zhtw/docs/生活ガイド/06.ゴミ分別",
                },
                {
                  text: "兼職工作",
                  link: "/zhtw/docs/生活ガイド/07.アルバイト",
                },
                {
                  text: "緊急情況應對",
                  link: "/zhtw/docs/生活ガイド/04.緊急対応",
                },
              ],
            },
          ],

          "/zhtw/docs/卒業後の進路/": [
            {
              text: "工作",
              items: [
                {
                  text: "在日工作",
                  collapsed: true,
                  items: [
                    {
                      text: "求職活動",
                      link: "/zhtw/docs/卒業後の進路/01.就職活動",
                    },
                    {
                      text: "企業招募系統",
                      link: "/zhtw/docs/卒業後の進路/02.会社制度",
                    },
                    {
                      text: "求職活動準備",
                      link: "/zhtw/docs/卒業後の進路/03.就活の準備・募集要項",
                    },
                    {
                      text: "招募流程",
                      link: "/zhtw/docs/卒業後の進路/04.採用選考の流れ",
                    },
                    {
                      text: "簽證變更申請",
                      link: "/zhtw/docs/卒業後の進路/05.在留資格の変更",
                    },
                  ],
                },
                {
                  text: "回國・海外工作",
                  link: "/zhtw/docs/卒業後の進路/06.帰国・海外就職",
                },
              ],
            },
          ],
        },
      },
    },

    zhcn: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zhcn/",
      title: "日本留学指南",
      description: "全方位的日本留学规划与建议",
      themeConfig: {
        outline: { label: "本页目录", level: [2, 3] },
        sidebarMenuLabel: "菜单",
        returnToTopLabel: "回到顶部",
        docFooter: { prev: "上一篇", next: "下一篇" },
        darkModeSwitchLabel: "外观切换",
        search: {
          provider: "local",
          options: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索",
              },
              modal: {
                noResultsText: "找不到相关结果",
                resetButtonTitle: "清除搜索条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },

        footer: {
          message: "",
          copyright: "copyright © 2026 KCGI group 35 All rights reserved.",
        },

        nav: [
          { text: "为什么选择日本", link: "zhcn/docs/whyjp/whyjp" },
          {
            text: "留学计划",
            items: [
              {
                text: "教育系统制度",
                link: "zhcn/docs/学校について/01.日本の教育制度",
              },
              {
                text: "学校种类",
                link: "zhcn/docs/学校について/02.日本の学校紹介",
              },
              {
                text: "相关考试",
                link: "zhcn/docs/学校について/03.関連する試験",
              },
              { text: "费用", link: "zhcn/docs/学校について/04.留学費用" },
              { text: "奖学金", link: "zhcn/docs/学校について/05.奨学金" },
            ],
          },
          {
            text: "入境",
            items: [
              { text: "签证", link: "/zhcn/docs/入国/01.在留資格" },
              { text: "入境前准备", link: "/zhcn/docs/入国/02.来日前の準備" },
              { text: "机场入境流程", link: "/zhcn/docs/入国/03.空港での流れ" },
            ],
          },
          {
            text: "生活",
            items: [
              {
                text: "居民登记",
                link: "/zhcn/docs/生活ガイド/01.住民登録・医療保険",
              },
              {
                text: "银行/电话号码",
                link: "/zhcn/docs/生活ガイド/02.口座開設・電話番号",
              },
              { text: "居住", link: "/zhcn/docs/生活ガイド/03.住まい" },
              { text: "交通", link: "/zhcn/docs/生活ガイド/05.交通・通学" },
              { text: "垃圾分类", link: "/zhcn/docs/生活ガイド/06.ゴミ分別" },
              { text: "兼职工作", link: "/zhcn/docs/生活ガイド/07.アルバイト" },
              {
                text: "紧急情况应对",
                link: "/zhcn/docs/生活ガイド/04.緊急対応",
              },
            ],
          },
          {
            text: "工作",
            items: [
              { text: "在日工作", link: "/zhcn/docs/卒業後の進路/01.就職活動" },
              {
                text: "回国/海外工作",
                link: "/zhcn/docs/卒業後の進路/06.帰国・海外就職",
              },
            ],
          },
          { text: "支援", link: "/zhcn/docs/支援/支援・情報サイト" },
        ],

        sidebar: {
          "/zhcn/docs/入国/": [
            {
              text: "入境",
              items: [
                { text: "签证", link: "/zhcn/docs/入国/01.在留資格" },
                { text: "入境前准备", link: "/zhcn/docs/入国/02.来日前の準備" },
                {
                  text: "机场入境流程",
                  link: "/zhcn/docs/入国/03.空港での流れ",
                },
              ],
            },
          ],
          "/zhcn/docs/学校について/": [
            {
              text: "留学计划",
              items: [
                {
                  text: "教育系统制度",
                  link: "/zhcn/docs/学校について/01.日本の教育制度",
                },
                {
                  text: "学校种类",
                  link: "/zhcn/docs/学校について/02.日本の学校紹介",
                },
                {
                  text: "相关考试",
                  link: "/zhcn/docs/学校について/03.関連する試験",
                },
                { text: "费用", link: "/zhcn/docs/学校について/04.留学費用" },
                { text: "奖学金", link: "/zhcn/docs/学校について/05.奨学金" },
              ],
            },
          ],
          "/zhcn/docs/生活ガイド/": [
            {
              text: "生活",
              items: [
                {
                  text: "居民登记",
                  link: "/zhcn/docs/生活ガイド/01.住民登録・医療保険",
                },
                {
                  text: "银行/电话号码",
                  link: "/zhcn/docs/生活ガイド/02.口座開設・電話番号",
                },
                { text: "居住", link: "/zhcn/docs/生活ガイド/03.住まい" },
                { text: "交通", link: "/zhcn/docs/生活ガイド/05.交通・通学" },
                { text: "垃圾分类", link: "/zhcn/docs/生活ガイド/06.ゴミ分別" },
                {
                  text: "兼职工作",
                  link: "/zhcn/docs/生活ガイド/07.アルバイト",
                },
                {
                  text: "紧急情况应对",
                  link: "/zhcn/docs/生活ガイド/04.緊急対応",
                },
              ],
            },
          ],
          "/zhcn/docs/卒業後の進路/": [
            {
              text: "工作",
              items: [
                {
                  text: "在日工作",
                  collapsed: true,
                  items: [
                    {
                      text: "求职活动",
                      link: "/zhcn/docs/卒業後の進路/01.就職活動",
                    },
                    {
                      text: "企业招聘系统",
                      link: "/zhcn/docs/卒業後の進路/02.会社制度",
                    },
                    {
                      text: "求职活动准备",
                      link: "/zhcn/docs/卒業後の進路/03.就活の準備・募集要項",
                    },
                    {
                      text: "招聘流程",
                      link: "/zhcn/docs/卒業後の進路/04.採用選考の流れ",
                    },
                    {
                      text: "签证变更申请",
                      link: "/zhcn/docs/卒業後の進路/05.在留資格の変更",
                    },
                  ],
                },
                {
                  text: "回国/海外工作",
                  link: "/zhcn/docs/卒業後の進路/06.帰国・海外就職",
                },
              ],
            },
          ],
        },
      },
    },
  },
});
