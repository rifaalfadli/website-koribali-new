import React from "react";
import {
  MessageSquare,
  PenTool,
  MonitorCheck,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import SectionWrapper from "../ui/SectionWrapper";

const workSteps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Konsultasi & Analisis",
    desc: "Diskusi awal untuk memahami kebutuhan spesifik, tantangan teknis, dan target proyek Anda.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Perencanaan & Desain",
    desc: "Tim ahli kami mulai merancang solusi arsitektur, kalkulasi beban, dan blueprint sistem.",
  },
  {
    icon: MonitorCheck,
    step: "03",
    title: "Pengembangan & Eksekusi",
    desc: "Fase konstruksi fisik atau penulisan kode software dengan kontrol kualitas yang ketat (SNI/ISO).",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Testing & Handover",
    desc: "Pengujian menyeluruh sebelum serah terima, memastikan semuanya berjalan sempurna.",
  },
];

const HowWeWork = () => {
  return (
    <SectionWrapper className="bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900/50 pt-20 pb-24 overflow-hidden">
      <div className="flex flex-col items-center text-center mb-16">
        <SectionHeading
          title="Cara Kerja Kami"
          description="Pendekatan sistematis dan profesional kami untuk memastikan setiap proyek berjalan tepat waktu dan sesuai standar."
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <div className="hidden lg:block absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-[2px] border-t-2 border-dashed border-slate-200 dark:border-slate-800 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {workSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 relative z-10 group-hover:border-blue-500 dark:group-hover:border-blue-600 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-600/30 group-hover:-translate-y-1">
                  <Icon className="w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-colors duration-300" />
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                    {item.step}
                  </div>
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors font-display">
                  {item.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-[260px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowWeWork;
