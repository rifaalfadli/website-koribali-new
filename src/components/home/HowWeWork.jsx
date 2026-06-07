import React from 'react';
import { MessageSquare, PenTool, MonitorCheck, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import SectionWrapper from '../ui/SectionWrapper';

// Data ditambahkan ikon dari Lucide React agar menyerupai referensi gambar
const workSteps = [
    {
        icon: MessageSquare,
        step: '01',
        title: 'Konsultasi & Analisis',
        desc: 'Diskusi awal untuk memahami kebutuhan spesifik, tantangan teknis, dan target proyek Anda.'
    },
    {
        icon: PenTool,
        step: '02',
        title: 'Perencanaan & Desain',
        desc: 'Tim ahli kami mulai merancang solusi arsitektur, kalkulasi beban, dan blueprint sistem.'
    },
    {
        icon: MonitorCheck,
        step: '03',
        title: 'Pengembangan & Eksekusi',
        desc: 'Fase konstruksi fisik atau penulisan kode software dengan kontrol kualitas yang ketat (SNI/ISO).'
    },
    {
        icon: CheckCircle,
        step: '04',
        title: 'Testing & Handover',
        desc: 'Pengujian menyeluruh sebelum serah terima, memastikan semuanya berjalan sempurna.'
    },
];

const HowWeWork = () => {
    return (
        <SectionWrapper className="bg-slate-950 border-y border-slate-900/50 pt-20 pb-24 overflow-hidden">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-16">
                <SectionHeading
                    title="Cara Kerja Kami"
                    description="Pendekatan sistematis dan profesional kami untuk memastikan setiap proyek berjalan tepat waktu dan sesuai standar."
                />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 md:px-8">
                {/* Garis Putus-putus Horizontal (Hanya tampil di Desktop) */}
                <div className="hidden lg:block absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-[2px] border-t-2 border-dashed border-slate-800 z-0" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {workSteps.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className="relative flex flex-col items-center text-center group">
                                {/* Lingkaran Ikon Tema Dark Blood */}
                                <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 relative z-10 group-hover:border-red-600 group-hover:bg-red-950/40 transition-all duration-300 shadow-lg group-hover:shadow-red-900/30 group-hover:-translate-y-1">
                                    <Icon className="w-8 h-8 text-slate-400 group-hover:text-red-500 transition-colors duration-300" />

                                    {/* Badge Angka Step (01, 02, dst) */}
                                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-red-600 border-4 border-slate-950 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                                        {item.step}
                                    </div>
                                </div>

                                {/* Teks Konten */}
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors font-display">
                                    {item.title}
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed max-w-[260px]">
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