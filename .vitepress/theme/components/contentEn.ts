import type { Section } from "../components/types";
import sakura from "../../../images/sakura.jpg";
import hanabi from "../../../images/hanabi.jpg";
import aki from "../../../images/aki.jpg";
import huyu from "../../../images/huyu.jpg";

export const reasons: Section[] = [
  {
    id: "education",
    title: "世界水準の教育と研究",
    subtitle: "World-class Education",
    content:
      "Japanese universities are globally respected across diverse fields, from science and technology to the humanities. Their world-class research environments, which have produced numerous Nobel Prize laureates, foster intellectual curiosity and deep learning.\n\nWith innovative curricula that develop problem-solving and creative thinking skills, and a growing number of degree programs offered in English, Japan's universities welcome students from diverse backgrounds worldwide.",
    image: sakura,
  },
  {
    id: "culture",
    title: "伝統と革新の融合",
    subtitle: "Tradition & Innovation",
    content:
      "Japan is a country where centuries-old shrines and temples coexist with cutting-edge skyscrapers. This unique environment offers rich inspiration to learn from the past while creating the future.\n\nWhile traditional arts such as tea ceremony and calligraphy nurture inner depth, pop culture—anime, manga, and fashion—captivates young people worldwide. Living amid this contrast of old and new sharpens your sensibilities and helps shape a unique perspective.",
    image: hanabi,
  },
  {
    id: "safety",
    title: "安心・安全な生活環境",
    subtitle: "Safety & Livability",
    content:
      "Japan is known as one of the safest countries in the world. Even walking alone at night rarely feels dangerous, and public transportation is punctual and clean—providing the peace of mind essential for focusing on academic life.\n\nIn addition, the national health insurance system allows international students to access high-quality medical care at an affordable cost. With numerous convenience stores and 24-hour services, daily life in Japan is exceptionally convenient.",
    image: aki,
  },
  {
    id: "career",
    title: "グローバルキャリアへの扉",
    subtitle: "Career Opportunities",
    content:
      "Japanese companies are rapidly expanding globally and actively recruiting talent from diverse cultural backgrounds. Studying in Japan and developing strong language skills provide a powerful advantage—not only for careers with Japanese firms, but also with companies worldwide.\n\nComprehensive career support for international students and well-established post-graduation visa systems make working in Japan more accessible. Gaining business experience in the world's third-largest economy can be a major catalyst for advancing your career.",
    image: huyu,
  },
];
