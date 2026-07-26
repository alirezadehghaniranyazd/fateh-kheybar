export type NavigationItem =
  | {
      type: "link";
      title: string;
      href: string;
    }
  | {
      type: "dropdown";
      title: string;
      children: {
        title: string;
        description: string;
        href: string;
      }[];
    };

export const navigation: NavigationItem[] = [
  {
    type: "link",
    title: "صفحه اصلی",
    href: "#home",
  },
  {
    type: "link",
    title: "درباره ما",
    href: "#about",
  },
  {
    type: "dropdown",
    title: "باشگاه‌ها",
    children: [
      {
        title: "نیو کونگ‌فو",
        description: "آموزش، دفاع شخصی و مسابقات",
        href: "#kungfu",
      },
      {
        title: "بدنسازی",
        description: "تمرین تخصصی و برنامه حرفه‌ای",
        href: "#bodybuilding",
      },
    ],
  },
  {
    type: "link",
    title: "مربیان",
    href: "#coaches",
  },
  {
    type: "link",
    title: "افتخارات",
    href: "#achievements",
  },
  {
    type: "link",
    title: "گالری",
    href: "#gallery",
  },
  {
    type: "link",
    title: "تماس با ما",
    href: "#contact",
  },
];