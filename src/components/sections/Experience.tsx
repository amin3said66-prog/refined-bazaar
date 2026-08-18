import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export function Experience() {
  const { tr } = useI18n();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as any },
    },
  };

  return (
    <section id="experience" className="scroll-mt-24 bg-gradient-to-b from-background via-secondary/10 to-background py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading title={tr("experience.title")} />

        {/* Timeline Container */}
        <motion.div
          className="relative space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {experience.map((item, index) => (
            <motion.div
              key={item.company}
              className="relative"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-4 z-10 md:left-1/2 md:-translate-x-1/2">
                <div className="flex size-16 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-gold to-gold/80 shadow-lg shadow-gold/20">
                  <Briefcase className="size-7 text-gold-foreground" />
                </div>
              </div>

              {/* Content card */}
              <div className={`ml-28 md:w-1/2 ${index % 2 === 1 ? "md:ml-auto md:mr-0 md:pr-12" : "md:ml-0 md:pl-12"}`}>
                <Reveal delay={index * 0.1}>
                  <div className="group glass relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 via-card to-card/30 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-gold/10 md:p-8">
                    {/* Accent corner */}
                    <div className="absolute -right-12 -top-12 size-32 rounded-full bg-gold/5 blur-3xl transition-all duration-500 group-hover:bg-gold/10" />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Period badge */}
                      <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 mb-4 border border-gold/20">
                        <Calendar className="size-3.5 text-gold" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                          {item.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-3 text-2xl font-bold text-foreground md:text-xl lg:text-2xl leading-tight">
                        {item.role}
                      </h3>

                      {/* Company */}
                      <div className="mt-2 flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-gold" />
                        <p className="text-sm font-semibold text-gold">{item.company}</p>
                      </div>

                      {/* Divider */}
                      <div className="my-5 h-px bg-gradient-to-r from-border via-gold/20 to-transparent" />

                      {/* Achievement points */}
                      <ul className="space-y-3">
                        {item.points.map((point, pointIndex) => (
                          <motion.li
                            key={point}
                            className="flex gap-3 text-sm leading-relaxed text-muted-foreground group/item"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: pointIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="mt-1.5 shrink-0">
                              <ChevronRight className="size-4 text-gold/60 transition-all duration-300 group-hover/item:text-gold group-hover/item:translate-x-0.5" />
                            </div>
                            <span className="transition-colors duration-300 group-hover/item:text-foreground">
                              {point}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Hover indicator */}
                      <div className="absolute -right-1 top-1/2 h-12 w-1 -translate-y-1/2 bg-gradient-to-b from-transparent via-gold to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>
                </Reveal>
              </div>
            </motion.div>
          ))}

          {/* End marker */}
          <motion.div
            className="relative ml-28 md:ml-1/2 md:-translate-x-1/2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: experience.length * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex size-16 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-gold/20 to-gold/10">
              <div className="size-3 rounded-full bg-gold" />
            </div>
          </motion.div>
        </motion.div>

        {/* Summary stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { labelKey: "experience.stats.years", value: "4+" },
            { labelKey: "experience.stats.companies", value: "2" },
            { labelKey: "experience.stats.teamScale", value: "1000+" },
          ].map((stat) => (
            <div
              key={stat.labelKey}
              className="glass rounded-xl bg-gradient-to-br from-card/40 to-card/20 px-4 py-6 text-center md:px-6 md:py-8 border border-gold/10"
            >
              <p className="text-2xl font-bold text-gold md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
                {tr(stat.labelKey)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
