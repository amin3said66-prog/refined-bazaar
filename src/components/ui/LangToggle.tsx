import { useI18n } from "@/lib/i18n";

export function LangToggle() {
  const { lang, toggleLang } = useI18n();
  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className="grid h-10 min-w-10 place-items-center rounded-full border border-border bg-secondary/50 px-3 text-sm font-semibold text-foreground transition-colors hover:border-gold/50 hover:text-gold"
    >
      {lang === "en" ? "ع" : "EN"}
    </button>
  );
}
