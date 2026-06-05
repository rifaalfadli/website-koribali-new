import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { articles } from '../data/articles';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionHeading from '../components/ui/SectionHeading';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/home/CTASection';

const Insight = () => {
  return (
    <>
      <Helmet>
        <title>Insight & Berita | Koribali</title>
        <meta name="description" content="Baca artikel terbaru seputar teknik sipil, teknologi informasi, dan tren industri dari Koribali." />
      </Helmet>

      <div className="pt-10">
        <SectionWrapper className="pb-8">
          <Breadcrumb items={[{ label: 'Insight' }]} />
          <SectionHeading 
            title="Insight Terbaru" 
            description="Wawasan, studi kasus, dan pembaruan seputar industri infrastruktur dan teknologi digital dari para ahli kami."
          />
        </SectionWrapper>

        {/* Articles Grid */}
        <SectionWrapper className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link to={`/insight/${article.id}`} key={article.id} className="group flex flex-col h-full bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors">
                <div className="aspect-video bg-slate-800 relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-900/80 backdrop-blur-md text-cyan-400 text-xs font-medium px-3 py-1 rounded-full border border-cyan-500/30">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-slate-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-3.5 h-3.5 mr-1.5" />
                      {article.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center text-cyan-400 text-sm font-medium">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Pagination Dummy */}
          <div className="flex justify-center items-center space-x-2 mt-12">
            <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-500 text-white font-medium shadow-lg shadow-cyan-500/25">1</button>
            <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700/50">2</button>
            <span className="text-slate-500 px-2">...</span>
            <button className="px-4 h-10 rounded-lg flex items-center justify-center bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700/50">
              Next <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </SectionWrapper>

        <CTASection />
      </div>
    </>
  );
};

export default Insight;
