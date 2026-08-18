import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

export const t: Dict = {
  "nav.about": { en: "About", ar: "نبذة" },
  "nav.skills": { en: "Skills", ar: "المهارات" },
  "nav.projects": { en: "Projects", ar: "المشاريع" },
  "nav.experience": { en: "Experience", ar: "الخبرات" },
  "nav.contact": { en: "Contact", ar: "تواصل" },

  "hero.eyebrow": {
    en: "Senior Full Stack Engineer | 4+ Years Specialized Experience",
    ar: "مهندس متكامل أول | 4+ سنوات خبرة متخصصة",
  },
  "hero.role": {
    en: "Full Stack Engineer & Microservices Architect",
    ar: "مهندس متكامل ومعماري الخدمات الصغيرة",
  },
  "hero.title1": { en: "Architecting enterprise", ar: "بناء أنظمة" },
  "hero.title2": { en: "marketplace solutions.", ar: "تجارة إلكترونية متقدمة." },
  "hero.subtitle": {
    en: "I specialize in high-performance Microservices, .NET 8, and modern Web Architectures. Expert in building scalable, multi-tenant enterprise platforms with optimized database performance and real-time integration.",
    ar: "متخصص في الخدمات الصغيرة عالية الأداء و.NET 8 والعمائر الويب الحديثة. خبير في بناء المنصات الموثوقة والقابلة للتوسع متعددة المستأجرين.",
  },
  "hero.cta1": { en: "View My Work", ar: "استعرض أعمالي" },
  "hero.cta2": { en: "Get in Touch", ar: "تواصل معي" },
  "hero.workWithMe": { en: "Work with Me", ar: "اعمل معي" },
  "hero.downloadCv": { en: "Download CV", ar: "تحميل السيرة الذاتية" },

  "about.title": { en: "About Me", ar: "نبذة عني" },
  "about.kicker": { en: "Senior Full Stack Engineer", ar: "مهندس متكامل أول" },
  "about.body": {
    en: "With 4+ years of experience specializing in high-performance Microservices and modern Web Architectures, I've built scalable marketplace-ready solutions using .NET 8, ASP.NET Core Web API, and modern frontend frameworks. I excel at optimizing system performance, architecting complex enterprise platforms, and leading technical initiatives that drive business value.",
    ar: "بخبرة أكثر من 4 سنوات في الخدمات الصغيرة عالية الأداء والعمائر الويب الحديثة، بنيت حلولاً قابلة للتوسع باستخدام .NET 8 و ASP.NET Core. أتفوق في تحسين أداء الأنظمة وتصميم المنصات المعقدة.",
  },
  "about.cta": { en: "Get in Touch", ar: "تواصل معي" },
  "skills.title": { en: "Skills & Expertise", ar: "المهارات والخبرات" },
  "projects.title": { en: "Featured Projects", ar: "مشاريع مختارة" },
  "experience.title": { en: "Experience", ar: "الخبرات" },
  "experience.stats.years": { en: "Years", ar: "سنوات" },
  "experience.stats.companies": { en: "Companies", ar: "شركات" },
  "experience.stats.teamScale": { en: "Team Scale", ar: "حجم الفريق" },
  "testimonials.title": { en: "What Clients Say", ar: "آراء العملاء" },

  "contact.title": { en: "Let's Build Something", ar: "لنبنِ شيئاً معاً" },
  "contact.subtitle": {
    en: "Have a marketplace idea or a system that needs to scale? Drop a line.",
    ar: "لديك فكرة سوق رقمي أو نظام يحتاج للتوسّع؟ راسلني.",
  },
  "contact.name": { en: "Name", ar: "الاسم" },
  "contact.email": { en: "Email", ar: "البريد الإلكتروني" },
  "contact.message": { en: "Message", ar: "الرسالة" },
  "contact.send": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.success": {
    en: "Message sent — I'll get back to you soon!",
    ar: "تم إرسال الرسالة — سأعود إليك قريباً!",
  },
};

interface I18nContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  toggleLang: () => void;
  tr: (key: keyof typeof t | string) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored) setLang(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));
  const tr = (key: string) => t[key]?.[lang] ?? key;

  return (
    <I18nContext.Provider
      value={{ lang, dir: lang === "ar" ? "rtl" : "ltr", toggleLang, tr }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
