import { motion } from "framer-motion";
import { Play, Download } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import heroIso from "@/assets/hero-iso.png";

const marqueeItems = [
  "Multi-vendor",
  "Real-time bidding",
  "Payments",
  "Search & ranking",
  "Logistics",
  "Analytics",
];

export function Hero() {
  const { tr } = useI18n();

  const whatsappLink = "https://wa.me/+201067358073";

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/Mostafa_Samir_CV.pdf";
    link.download = "Mostafa_Samir_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -left-24 top-24 size-[28rem] rounded-full bg-gold/20 blur-[120px] animate-blob" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-[11px] font-bold uppercase tracking-[0.4em] text-gold"
          >
            {tr("hero.role")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="font-display text-[clamp(2.2rem,4.4vw,4rem)] font-black uppercase leading-[0.92] text-foreground"
          >
            {tr("hero.title1")}
            <br />
            <span className="text-gold">{tr("hero.title2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-7 max-w-sm text-sm leading-relaxed text-muted-foreground"
          >
            {tr("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-gold py-2 pl-2 pr-6 font-bold uppercase tracking-[0.14em] text-gold-foreground transition-transform duration-300 hover:scale-[1.04]"
            >
              <span className="grid size-9 place-items-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:rotate-12">
                <Play className="size-4 fill-current" />
              </span>
              <span className="text-xs">{tr("hero.workWithMe")}</span>
            </a>
            <button
              onClick={downloadCV}
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              <Download className="size-4 transition-transform group-hover:-translate-y-0.5" />
              {tr("hero.downloadCv")}
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.21, 0.5, 0.3, 1] }}
          className="relative"
        >
          <img
            src={heroIso}
            alt="Isometric illustration of a marketplace workspace built from 3D letters"
            width={1200}
            height={1104}
            className="mx-auto w-full max-w-2xl animate-float drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <div className="relative mt-14 overflow-hidden border-y border-border py-4">
        <div className="flex w-max animate-marquee items-center gap-10">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span
                key={i}
                className="flex items-center gap-10 text-sm font-bold uppercase tracking-[0.3em] text-foreground/80"
              >
                {item}
                <span className="size-2 rounded-full bg-gold" />
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
