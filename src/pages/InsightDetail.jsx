import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/home/CTASection';

const InsightDetail = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.id === slug);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  // Related articles (mock: just pick the first two that are not this one)
  const relatedArticles = articles.filter(a => a.id !== slug).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{article.title} | Koribali Insight</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <div className="pt-10">
        <SectionWrapper className="pb-8">
          <Breadcrumb items={[{ label: 'Insight', href: '/insight' }, { label: article.title }]} />
          
          <div className="max-w-4xl mx-auto mt-6">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span>{article.category}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white font-display leading-tight mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center text-sm text-slate-400 mb-10 space-x-6 border-y border-slate-800 py-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-slate-500" />
                {article.date}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-slate-500" />
                {article.author}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Article Image & Content */}
        <SectionWrapper className="pt-0">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video w-full bg-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl border border-slate-700">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none text-slate-300">
              {/* Dummy content renderer (since we just have an excerpt in mock data, we generate longer paragraphs) */}
              <p className="lead text-xl text-slate-300 mb-8 font-medium">
                {article.excerpt}
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Latar Belakang & Pendekatan</h2>
              <p className="mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="mb-6 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              
              <div className="bg-slate-900 border-l-4 border-cyan-500 p-6 my-10 rounded-r-xl">
                <p className="text-lg italic text-slate-300 m-0">
                  "Integrasi teknologi bukan sekadar soal menambah software baru, melainkan tentang mengubah cara pikir (mindset) dari tradisional ke digital."
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Solusi dan Hasil Terukur</h2>
              <p className="mb-6 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Otomatisasi proses kalkulasi hingga 60% lebih cepat.</li>
                <li>Pengurangan error manual karena standardisasi workflow.</li>
                <li>Pemantauan real-time yang dapat diakses oleh semua stakeholder.</li>
              </ul>
            </div>
            
            <div className="mt-16 pt-8 border-t border-slate-800">
              <Link to="/insight" className="inline-flex items-center text-slate-400 hover:text-white transition-colors font-medium">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Kembali ke Daftar Insight
              </Link>
            </div>
          </div>
        </SectionWrapper>

        {/* Related Articles */}
        <SectionWrapper className="bg-slate-900/30 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-8 text-center font-display">Artikel Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedArticles.map((relArticle) => (
              <Link to={`/insight/${relArticle.id}`} key={relArticle.id} className="group flex flex-col h-full bg-slate-950/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors">
                <div className="aspect-[16/7] bg-slate-800 relative overflow-hidden">
                  <img src={relArticle.image} alt={relArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">{relArticle.title}</h3>
                  <div className="flex items-center text-xs text-slate-500 mt-auto pt-4">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {relArticle.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>

        <CTASection />
      </div>
    </>
  );
};

export default InsightDetail;
