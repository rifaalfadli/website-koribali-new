import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';

import { projects as previewProjects } from '../../data/projects';

const RelatedProjects = ({ category }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const related = previewProjects.filter((p) => p.category === category);

    useEffect(() => {
        setActiveIndex(0);
    }, [category]);

    if (!related || related.length === 0) return null;

    const activeProject = related[activeIndex];
    const total = related.length;

    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
    const handleNext = () => setActiveIndex((prev) => (prev + 1) % total);

    return (
        <div className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Header + Navigation Arrows */}
                <div className="flex items-center justify-between mb-16">
                    <div>
                        <span className="text-red-500 font-bold uppercase tracking-widest text-sm">
                            Project Terkait
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-display mt-3">
                            Karya Unggulan {category === 'Civil Engineering' ? 'Infrastruktur' : category === 'IT & Digital Solutions' ? 'Sistem Digital' : 'Data & Analitik'}
                        </h2>
                    </div>

                    {/* Arrow Buttons + Counter */}
                    <div className="flex items-center gap-4 shrink-0">
                        <span className="text-slate-500 text-sm tabular-nums">
                            {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                        </span>
                        <div className="flex gap-2">
                            <button
                                onClick={handlePrev}
                                className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-red-600 hover:text-red-500 hover:bg-red-950/30 transition-all"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-red-600 hover:text-red-500 hover:bg-red-950/30 transition-all"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Layout Konten */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Kiri: Gambar */}
                    <div className="lg:col-span-5 relative group">
                        <div className="absolute inset-0 bg-red-900/20 blur-2xl rounded-full transform -translate-x-4 translate-y-4 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-[3/4] border border-slate-800 shadow-2xl">
                            <img
                                key={activeProject.id}
                                src={activeProject.image}
                                alt={activeProject.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />
                        </div>
                    </div>

                    {/* Kanan: Detail */}
                    <div className="lg:col-span-7">
                        <h3 className="text-3xl md:text-4xl font-bold text-white font-display mb-5 leading-tight">
                            {activeProject.title}
                        </h3>
                        <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10">
                            {activeProject.shortDescription}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-red-900/50 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                                    <Check className="w-5 h-5 text-red-500" strokeWidth={3} />
                                </div>
                                <h4 className="text-white font-semibold mb-2">Solusi Spesifik</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">Dirancang khusus untuk menyelesaikan tantangan unik di industri terkait.</p>
                            </div>
                            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-red-900/50 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                                    <Check className="w-5 h-5 text-red-500" strokeWidth={3} />
                                </div>
                                <h4 className="text-white font-semibold mb-2">Standar Profesional</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">Mengedepankan akurasi, keamanan, dan performa stabil jangka panjang.</p>
                            </div>
                        </div>

                        <Link to={`/project/${activeProject.id}`}>
                            <Button variant="primary" className="gap-2">
                                Lihat Detail Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedProjects;