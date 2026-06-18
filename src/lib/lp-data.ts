export const LP_DATA = {
  phone: "+420 601 002 989",
  phoneHref: "tel:+420601002989",
  email: "info@voltimo.cz",
  address: "Přeštice, Plzeňsko",
  price: {
    regular: 50_000,
    current: 40_000,
    discount: 10_000,
    deadline: "30. 6. 2026",
  },
  stats: {
    graduates: "300+",
    successRate: "96 %",
    teacherExperience: "30 let",
  },
  dates: [
    {
      d: "13",
      m: "ČVC",
      title: "Letní běh A",
      range: "Příprava 13. – 17. 7. · zkoušky 20. – 24. 7. 2026",
      cap: "Poslední 2 místa",
      capLevel: "low" as const,
      featured: true,
    },
    {
      d: "27",
      m: "ČVC",
      title: "Letní běh B",
      range: "Příprava 27. – 31. 7. · zkoušky 3. – 7. 8. 2026",
      cap: "Zbývají 3 místa",
      capLevel: "low" as const,
      featured: false,
    },
    {
      d: "24",
      m: "SRP",
      title: "Srpnový běh",
      range: "Příprava 24. – 28. 8. · zkoušky 31. 8. – 4. 9. 2026",
      cap: "Zbývá 5 míst",
      capLevel: "ok" as const,
      featured: false,
    },
    {
      d: "21",
      m: "ZÁŘ",
      title: "Zářijový běh",
      range: "Příprava 21. – 25. 9. · zkoušky 28. 9. – 2. 10. 2026",
      cap: "Zbývají 4 místa",
      capLevel: "ok" as const,
      featured: false,
    },
  ],
} as const;

export type LpDate = (typeof LP_DATA.dates)[number];
