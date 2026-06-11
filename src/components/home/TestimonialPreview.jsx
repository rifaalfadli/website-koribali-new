import React, { useState, useEffect } from 'react';
import { Heart, Star } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

// Data Testimonial (9 Klien mewakili Sipil, IT, dan Data)
const testimonials = [
    {
        id: 1,
        name: 'Bapak Hendrawan',
        role: 'Direktur Operasional, PT Baja Konstruksi',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        quote: 'Desain struktur dan kalkulasi beban dari tim Koribali sangat presisi. Membantu proyek jembatan kami lolos uji kelayakan dengan standar keamanan tertinggi.',
    },
    {
        id: 2,
        name: 'Siska Maharani',
        role: 'Head of IT, Manufaktur Nusantara',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        quote: 'Integrasi sistem web custom dengan Autodesk Inventor benar-benar menghemat waktu produksi kami hingga 40%. Sistemnya stabil dan sangat menunjang operasional kami.',
    },
    {
        id: 3,
        name: 'Ahmad Rizky',
        role: 'Project Manager, Infrastruktur Tol',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        quote: 'Berkat dashboard analitik dari Koribali, kami bisa memonitor progres lapangan dan material secara real-time. Keputusan bisnis jadi jauh lebih akurat dan terukur.',
    },
    {
        id: 4,
        name: 'Ir. Budi Santoso',
        role: 'Chief Engineer, PT Waskita Karya',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        quote: 'Perencanaan geometrik jalan dan drainase yang dibuat tim Koribali sangat efisien. Mereka sangat paham standar SNI dan menerapkannya dengan sempurna di lapangan.',
    },
    {
        id: 5,
        name: 'Diana Larasati',
        role: 'CEO, Logistik Cerdas Indonesia',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        quote: 'Aplikasi manajemen aset yang dibangun Koribali membuat pelacakan armada dan perawatan mesin kami menjadi otomatis. Sangat profesional dan tepat waktu.',
    },
    {
        id: 6,
        name: 'Reza Pratama',
        role: 'Data Officer, Dinas Pekerjaan Umum',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        quote: 'Sistem prediksi pemeliharaan berbasis AI yang mereka rancang sangat revolusioner. Kami kini bisa mendeteksi potensi kerusakan infrastruktur sebelum terjadi.',
    },
    {
        id: 7,
        name: 'Faisal Akbar',
        role: 'Head of Engineering, PT Bangun Karya',
        image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        quote: 'Gambar kerja dan pemodelan 3D yang diberikan sangat aplikatif. Tim di lapangan tidak menemui kendala berarti saat melakukan fabrikasi dan ereksi baja.',
    },
    {
        id: 8,
        name: 'Anita Wijaya',
        role: 'Manager Operasional, Trans Logistik',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        quote: 'Pengembangan web app custom untuk manajemen inventory kami selesai lebih cepat dari target awal. User interface-nya intuitif dan mudah dipelajari oleh karyawan.',
    },
    {
        id: 9,
        name: 'Dr. Ilham Pramono',
        role: 'Kepala Divisi Riset, PT Insan Sipil',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        quote: 'Visualisasi data pergerakan tanah yang dirancang Koribali sangat informatif. Sangat membantu tim kami dalam mengambil keputusan mitigasi risiko struktural secara cepat.',
    }
];

const TestimonialPreview = () => {
    // State untuk Carousel
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // Mengatur jumlah item per halaman berdasarkan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1); // Mobile: 1 Card
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2); // Tablet: 2 Card
            } else {
                setItemsPerPage(3); // Desktop: 3 Card
            }
        };

        handleResize(); // Panggil saat pertama kali load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Reset ke halaman pertama jika ukuran layar berubah
    useEffect(() => {
        setCurrentPage(0);
    }, [itemsPerPage]);

    // Membagi data testimonial menjadi beberapa halaman (chunks)
    const chunkedTestimonials = [];
    for (let i = 0; i < testimonials.length; i += itemsPerPage) {
        chunkedTestimonials.push(testimonials.slice(i, i + itemsPerPage));
    }

    const totalPages = chunkedTestimonials.length;

    // Auto-slide setiap 8 detik (8000ms)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        }, 8000);

        return () => clearInterval(interval);
    }, [totalPages]);

    return (
        <SectionWrapper className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900/80 pt-20 pb-24 overflow-hidden">

            {/* Header Rata Tengah */}
            <div className="flex flex-col items-center text-center mb-16 px-4">
                <span className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-3">
                    Klien Kami
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-display max-w-3xl leading-tight">
                    Dipercaya Bisnis untuk Tumbuh dengan Solusi Integrasi
                </h2>
            </div>

            {/* Area Carousel Cards */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 overflow-hidden">

                {/* 
                    PERBAIKAN UTAMA: 
                    Menambahkan "gap-16" antar halaman, dan memodifikasi style transform 
                    menggunakan rumus "calc" agar jarak (4rem) ikut dihitung saat menggeser.
                */}
                <div
                    className="flex transition-transform duration-700 ease-in-out gap-16"
                    style={{ transform: `translateX(calc(-${currentPage * 100}% - ${currentPage * 4}rem))` }}
                >
                    {chunkedTestimonials.map((page, pageIndex) => (
                        // Menambahkan min-w-full agar ukuran container mutlak 100%
                        <div key={pageIndex} className="w-full min-w-full flex-shrink-0 flex-grow-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {page.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center h-full"
                                >
                                    {/* Ikon Heart (Pojok Kiri Atas) */}
                                    <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/30 flex items-center justify-center text-red-500 shadow-sm">
                                        <Heart className="w-5 h-5 fill-current" />
                                    </div>

                                    {/* Avatar Klien */}
                                    <div className="w-24 h-24 rounded-full overflow-hidden mb-5 ring-4 ring-slate-100 dark:ring-slate-950 shadow-xl flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Rating Bintang 5 */}
                                    <div className="flex items-center gap-1.5 mb-5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                        ))}
                                    </div>

                                    {/* Nama & Posisi */}
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 font-display">
                                        {item.name}
                                    </h4>
                                    <p className="text-slate-500 dark:text-slate-500 text-sm italic mb-6">
                                        {item.role}
                                    </p>

                                    {/* Kutipan Testimonial */}
                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-grow">
                                        "{item.quote}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Indikator Halaman (Dots) */}
                <div className="flex items-center justify-center space-x-3 mt-12">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            aria-label={`Lihat Halaman ${index + 1}`}
                            className={`h-2.5 rounded-full transition-all duration-500 ${currentPage === index
                                ? 'w-10 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                                : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-500'
                                }`}
                        />
                    ))}
                </div>
            </div>

        </SectionWrapper>
    );
};

export default TestimonialPreview;