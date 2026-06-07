import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { articles } from '../data/articles';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/home/CTASection';
import PageHero from '../components/ui/PageHero';

const Insight = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 1. Dapatkan daftar kategori unik
  const categories = ['Semua', ...new Set(articles.map(a => a.category))];

  // 2. Ambil 5 artikel terpopuler untuk Trending
  const trendingArticles = [...articles].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);
  const mainTrending = trendingArticles[0];
  const sideTrending = trendingArticles.slice(1);
  const trendingIds = trendingArticles.map(a => a.id);

  // 3. Filter sisa artikel (di luar 5 trending) untuk grid "Blog Lainnya"
  let gridArticles = articles.filter(a => !trendingIds.includes(a.id));
  if (activeCategory !== 'Semua') {
    gridArticles = gridArticles.filter(a => a.category === activeCategory);
  }

  // 4. Pagination
  const totalPages = Math.ceil(gridArticles.length / itemsPerPage);
  const visibleArticles = gridArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <>
      <Helmet>
        <title>Insight & Berita | Koribali</title>
        <meta name="description" content="Baca artikel terbaru seputar teknik sipil, teknologi informasi, dan tren industri dari Koribali." />
      </Helmet>

      <PageHero
        title="Insight Terbaru"
        description="Wawasan, studi kasus, dan pembaruan seputar industri infrastruktur dan teknologi digital dari para ahli kami."
        breadcrumbs={[{ label: 'Insight' }]}
      />

      <div className="pt-10 bg-slate-950">
        <SectionWrapper className="pt-0">

          {/* SECTION: TRENDING */}
          {currentPage === 1 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white font-display mb-8">Trending</h2>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                {/* Main Trending (Kiri) */}
                <div className="lg:col-span-7 xl:col-span-8">
                  <Link to={`/insight/${mainTrending.id}`} className="block group h-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={mainTrending.image}
                        alt={mainTrending.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-4 text-sm font-semibold">
                        <span className="text-slate-400">{formatDate(mainTrending.date)}</span>
                        <span className="bg-slate-950 text-red-400 px-3 py-1 rounded-full border border-slate-800">{mainTrending.category}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors leading-snug">
                        {mainTrending.title}
                      </h3>
                      <p className="text-slate-400 text-lg leading-relaxed mb-8 line-clamp-2">
                        {mainTrending.excerpt}
                      </p>
                      <div className="flex items-center text-red-500 font-bold group-hover:text-red-400">
                        Read More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Side Trending (Kanan) */}
                <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4">
                  {sideTrending.map((article, idx) => (
                    <Link to={`/insight/${article.id}`} key={article.id} className="block group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-x-1 hover:border-red-900/50 hover:shadow-xl transition-all duration-300 flex-1 flex flex-col justify-center">
                      <div className="flex items-center space-x-3 mb-3 text-xs font-semibold">
                        <span className="bg-slate-950 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800">#{idx + 2}</span>
                        <span className="text-red-400">{article.category}</span>
                        <span className="text-slate-500">{formatDate(article.date)}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h4>
                      <div className="flex items-center text-xs text-slate-500 mt-auto">
                        <span className="font-medium mr-2">{article.views}x dilihat</span>
                        <span>•</span>
                        <span className="ml-2 group-hover:text-red-400 transition-colors">Baca selengkapnya</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SECTION: CATEGORY PILLS */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === cat
                  ? 'bg-red-600 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SECTION: GRID ARTIKEL LATIHAN / FILTERED */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white font-display mb-8">
              {activeCategory === 'Semua' ? 'Blog Lainnya' : `Kategori: ${activeCategory}`}
            </h2>

            {visibleArticles.length === 0 ? (
              <div className="text-center py-20 bg-slate-900/50 border border-slate-800 border-dashed rounded-3xl text-slate-500">
                Belum ada artikel di kategori ini.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleArticles.map((article) => (
                  <Link to={`/insight/${article.id}`} key={article.id} className="group flex flex-col h-full bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[4/3] bg-slate-950 relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                      />
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-slate-400 text-xs font-semibold">
                          {formatDate(article.date)}
                        </span>
                        <span className="bg-slate-950 text-red-400 text-xs font-semibold px-3 py-1 rounded-full border border-slate-800">
                          {article.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="mt-auto flex items-center text-red-500 text-sm font-bold group-hover:text-red-400 transition-colors border-t border-slate-800/80 pt-5">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* SECTION: PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-16">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors border border-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNum = idx + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 border ${currentPage === pageNum
                          ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)] border-red-500 scale-110'
                          : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white border-slate-800'
                        }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors border border-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

        </SectionWrapper>

        <CTASection />
      </div>
    </>
  );
};

export default Insight;
