const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Coffeebone",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "커피본의 노션 블로그.",
    bio: "👋 안녕하세요! 저는 열정적인 작가이자 독자인 ‘커피본’입니다. 호기심 많은 저는 코딩, 통계, 투자 등을 독학하고 있으며, 문학, 과학, 철학 등 다양한 주제를 탐구하는 것을 좋아합니다. 생물학분야 전공으로 대학을 졸업한 후 국립연구기관에서 1년간 연구원으로 일했으며, 현재 벤처 창업을 준비 중입니다. 이 블로그에서는 제가 관심 있는 분야와 배운 점들, 그리고 다양한 시각을 함께 나누고자 합니다. 재미있게 읽어주세요! 😊",
    email: "coff33b1@gmail.com",
    linkedin: "morethanmin",
    github: "morethanmin",
    instagram: "",
  },
  projects: [
    {
      name: `Coffeebone`,
      href: "https://github.com/Coffeebone/Coffeebone-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Coffeebone",
    description: "어서오세요!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://coffeebone.vercel.app",
  since: 2025, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
