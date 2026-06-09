import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { articles } from '../../data/articles';

const InsightPreview = () => {
  // Ambil 1 artikel pertama dari masing-masing kategori layanan
  const targetCategories = ['Civil Engineering', 'IT & Digital Solutions', 'Data & Analytics'];
  const previewArticles = targetCategories
    .map(category => articles.find(article => article.category === category))
    .filter(Boolean); // Hapus hasil undefined jika ada yang tidak ditemukan
    
  return (
    <SectionWrapper className="bg-slate-950">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <SectionHeading
          title="Insight & Artikel"
          description="Berita, tren, dan wawasan terbaru seputar teknik sipil dan inovasi teknologi informasi."
          className="mb-6 md:mb-0"
        />

        {/* Tombol Desktop dengan Efek Pill-Shape Deep Blue */}
        <Link to="/insight" className="hidden md:block">
          <Button variant="ghost" className="group">
            Baca Semua Insight
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {previewArticles.map((article) => (
          <Link to={`/insight/${article.id}`} key={article.id} className="group cursor-pointer">
            {/* Kartu Artikel dengan Hover Deep Blue Premium */}
            <div className="flex flex-col h-full bg-slate-900 border border-slate-800 rounded-[1.5rem] overflow-hidden transition-all duration-300 hover:-translate-y-1">

              {/* Image Container dibuat full width menyesuaikan ProjectPreview */}
              <div className="aspect-video bg-slate-950 relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-500 text-xs font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center text-slate-500 text-xs font-medium">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {new Date(article.date).toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-4 group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>

                <div className="mt-auto flex items-center justify-between border-t border-slate-800/80 pt-5">
                  <span className="text-sm text-slate-400 font-medium">Oleh <span className="text-slate-300">{article.author}</span></span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Tombol Mobile View dengan Hover Outline Biru */}
      <div className="mt-10 text-center md:hidden">
        <Link to="/insight">
          <Button variant="secondary" className="w-full">
            Baca Semua Insight
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default InsightPreview;