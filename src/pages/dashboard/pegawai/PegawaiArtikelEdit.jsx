import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import Youtube from '@tiptap/extension-youtube';
import {
  ArrowLeft, Save, Send, Upload, Link as LinkIcon,
  Bold, Italic, Underline as UnderlineIcon,
  AlignLeft, AlignCenter, AlignRight,
  Heading1, Heading2, Heading3, List, ListOrdered, ImageIcon, Type, PlayCircle, Info, AlertTriangle, Quote
} from 'lucide-react';

const categories = [
  'AI Solutions & Digitalization',
  'Engineering Technology Consulting',
];

const ToolbarBtn = ({ active, onClick, title, children }) => (
  <button
    type="button"
    onMouseDown={(e) => { e.preventDefault(); onClick(); }}
    title={title}
    className={`p-1.5 rounded-lg transition-colors ${
      active
        ? 'bg-blue-500/20 text-blue-400'
        : 'text-slate-400 hover:text-white hover:bg-slate-700'
    }`}
  >
    {children}
  </button>
);

const dummyArticles = [
  {
    id: 'llm-bisnis-indonesia',
    title: 'Memanfaatkan Large Language Model (LLM) untuk Transformasi Bisnis di Indonesia',
    category: 'AI Solutions & Digitalization',
    excerpt: 'Artikel ini mengeksplorasi bagaimana LLM seperti GPT-4 dapat diterapkan untuk meningkatkan efisiensi operasional dan layanan pelanggan di Indonesia.',
    content: '<p>Kecerdasan buatan (AI) khususnya Large Language Model (LLM) telah berkembang sangat pesat...</p>',
    status: 'published',
  },
  {
    id: 'erp-custom-vs-ready',
    title: 'Mengapa Sistem ERP Custom Lebih Efektif Daripada Solusi Siap Pakai?',
    category: 'AI Solutions & Digitalization',
    excerpt: 'Panduan lengkap membandingkan ERP kustom dengan solusi SaaS out-of-the-box untuk bisnis skala menengah.',
    content: '<p>Banyak perusahaan menghadapi dilema ketika ingin menerapkan sistem ERP...</p>',
    status: 'unpublished',
    note: 'Ada data yang kurang akurat pada paragraf 2 terkait persentase. Tolong dicek lagi sumber terbarunya.',
  },
  {
    id: 'pwa-solusi-aplikasi',
    title: 'Progressive Web App (PWA): Solusi Cerdas Aplikasi Tanpa Perlu Instalasi',
    category: 'AI Solutions & Digitalization',
    excerpt: 'Bagaimana PWA meningkatkan retensi pengguna dengan loading cepat dan kemampuan offline.',
    content: '<p>Progressive Web App (PWA) menggabungkan fitur terbaik dari web dan aplikasi mobile...</p>',
    status: 'published',
  },
  {
    id: 'bim-revolusi-desain-draft',
    title: 'Revolusi Desain Sipil dengan Digital Twin dan BIM Level 3',
    category: 'Engineering Technology Consulting',
    excerpt: 'Menelaah integrasi BIM Level 3 dengan teknologi digital twin untuk pengelolaan siklus hidup infrastruktur.',
    content: '<p>Dalam industri konstruksi modern, Building Information Modeling (BIM)...</p>',
    status: 'draft',
  },
  {
    id: 'ai-rekayasa-review',
    title: 'Penerapan AI dalam Rekayasa Teknik: Peluang dan Tantangan',
    category: 'Engineering Technology Consulting',
    excerpt: 'Peluang dan tantangan menerapkan kecerdasan buatan di bidang rekayasa sipil dan struktural.',
    content: '<p>Penerapan AI di bidang rekayasa teknik menawarkan potensi efisiensi luar biasa...</p>',
    status: 'review',
  },
  {
    id: 'ai-rekayasa-rejected',
    title: 'Penerapan Internet of Things (IoT) di Sektor Pertanian Bali',
    category: 'Engineering Technology Consulting',
    excerpt: 'Bagaimana sensor IoT dapat memantau kelembaban tanah dan mendistribusikan air secara otomatis di subak Bali.',
    content: '<p>Pertanian modern di Bali menghadapi tantangan keterbatasan sumber daya air, perubahan iklim, dan tuntutan efisiensi. Salah satu solusi inovatif yang mulai diterapkan adalah Internet of Things (IoT). Dengan memasang sensor kelembaban tanah, suhu udara, dan debit air di sistem pengairan Subak, petani dapat mengoptimalkan penggunaan air secara real-time melalui aplikasi smartphone.</p>',
    status: 'rejected',
    note: 'Mohon tambahkan lebih banyak contoh studi kasus nyata penerapan IoT pada sawah/subak di Bali.',
  },
];

const ToolbarDivider = () => (
  <div className="w-px h-5 bg-slate-700 mx-1 self-center" />
);

const PegawaiArtikelEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const fileInputRef = useRef(null);

  // TODO: ambil data artikel berdasarkan id dari API
  // Sementara pakai data dummy sebagai nilai awal form
  const [form, setForm] = useState({ title: '', category: '', excerpt: '' });
  const [coverPreview, setCoverPreview] = useState('');
  const [coverMode, setCoverMode] = useState('upload');
  const [coverUrl, setCoverUrl] = useState('');
  const [submitted, setSubmitted] = useState(null);
  const [articleStatus, setArticleStatus] = useState('');
  const [rejectionNote, setRejectionNote] = useState('');
  const [, setUpdateTick] = useState(0);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Image.configure({ inline: false, allowBase64: true }),
      Youtube.configure({ width: '100%', height: 360, nocookie: true }),
      Placeholder.configure({ placeholder: 'Tulis konten artikel di sini...' }),
    ],
    editorProps: {
      attributes: { class: 'tiptap-editor' },
    },
  });

  React.useEffect(() => {
    if (!editor) return;
    const sync = () => setUpdateTick(t => t + 1);
    editor.on('selectionUpdate', sync);
    editor.on('transaction', sync);
    return () => {
      editor.off('selectionUpdate', sync);
      editor.off('transaction', sync);
    };
  }, [editor]);

  React.useEffect(() => {
    const found = dummyArticles.find((a) => a.id === id);
    if (found) {
      setForm({
        title: found.title,
        category: found.category,
        excerpt: found.excerpt || '',
      });
      setArticleStatus(found.status);
      setRejectionNote(found.note || '');
      if (editor && found.content) {
        editor.commands.setContent(found.content);
      }
    }
  }, [id, editor]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setCoverPreview(url);
    setCoverUrl('');
  };

  const handleUrlApply = () => {
    if (coverUrl.trim()) setCoverPreview(coverUrl.trim());
  };

  const insertImageToEditor = () => {
    const url = window.prompt('Masukkan URL gambar:');
    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const editorImageInputRef = useRef(null);

  const insertFileToEditor = (e) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;
    const url = URL.createObjectURL(file);
    editor.chain().focus().setImage({ src: url }).run();
    e.target.value = '';
  };

  const insertYoutube = () => {
    const url = window.prompt('Masukkan URL video YouTube:');
    if (url && editor) {
      editor.chain().focus().setYoutubeVideo({ src: url }).run();
    }
  };

  const isReady = form.title && form.excerpt && form.category && editor?.getText().trim().length > 0;

  const handleSave = (type) => {
    // Ketika dikirim ulang untuk review, status artikel kembali ke 'review' (menunggu persetujuan admin)
    setSubmitted(type);
    setTimeout(() => navigate('/dashboard/pegawai/artikel'), 1600);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
          <Send className="w-7 h-7 text-emerald-400" />
        </div>
        <h2 className="text-xl font-bold text-white mb-2">
          {submitted === 'draft' ? 'Disimpan sebagai Draft' : 'Dikirim Ulang untuk Review'}
        </h2>
        {submitted === 'review' && (
          <p className="text-slate-400 text-sm mb-1">Artikel menunggu persetujuan admin sebelum dipublikasikan kembali.</p>
        )}
        <p className="text-slate-500 text-sm">Mengalihkan ke daftar artikel...</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Edit Artikel | Koribali Portal</title>
      </Helmet>

      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <button
          onClick={() => navigate('/dashboard/pegawai/artikel')}
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Edit Artikel</h1>
          <p className="text-slate-400 text-sm">Perubahan yang dikirim ulang akan menunggu persetujuan admin.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-5">
          {(articleStatus === 'rejected' || articleStatus === 'unpublished') && rejectionNote && (
            <div className={`${articleStatus === 'rejected' ? 'bg-red-500/10 border-red-500/20' : 'bg-amber-500/10 border-amber-500/20'} border rounded-2xl p-5 flex gap-4`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${articleStatus === 'rejected' ? 'bg-red-500/10' : 'bg-amber-500/10'}`}>
                <AlertTriangle className={`w-5 h-5 ${articleStatus === 'rejected' ? 'text-red-400' : 'text-amber-400'}`} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">
                  {articleStatus === 'rejected' ? 'Artikel Perlu Direvisi (Ditolak Admin)' : 'Artikel Perlu Direvisi (Diturunkan Admin)'}
                </h4>
                <p className={`text-sm leading-relaxed ${articleStatus === 'rejected' ? 'text-red-300/90' : 'text-amber-300/90'}`}>"{rejectionNote}"</p>
              </div>
            </div>
          )}

          {/* Judul */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Judul Artikel <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Tulis judul artikel yang menarik..."
              className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white text-lg font-semibold placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          {/* Excerpt */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Ringkasan <span className="text-red-400">*</span>
            </label>
            <textarea
              name="excerpt"
              value={form.excerpt}
              onChange={handleChange}
              rows={3}
              placeholder="Tulis ringkasan singkat yang tampil di halaman listing..."
              className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
            />
            <p className="text-xs text-slate-500 mt-2">{form.excerpt.length} / 200 karakter disarankan</p>
          </div>

          {/* Rich Text Editor */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="px-4 py-2 border-b border-slate-800 bg-slate-950/30">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 pt-1">Konten Artikel</p>

              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-0.5 pb-2">
                <ToolbarBtn
                  title="Teks Normal"
                  active={editor?.isActive('paragraph')}
                  onClick={() => editor?.chain().focus().setParagraph().run()}
                >
                  <Type className="w-4 h-4" />
                </ToolbarBtn>
                <ToolbarBtn
                  title="Heading 1"
                  active={editor?.isActive('heading', { level: 1 })}
                  onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
                >
                  <Heading1 className="w-4 h-4" />
                </ToolbarBtn>
                <ToolbarBtn
                  title="Heading 2"
                  active={editor?.isActive('heading', { level: 2 })}
                  onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                >
                  <Heading2 className="w-4 h-4" />
                </ToolbarBtn>
                <ToolbarBtn
                  title="Heading 3"
                  active={editor?.isActive('heading', { level: 3 })}
                  onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
                >
                  <Heading3 className="w-4 h-4" />
                </ToolbarBtn>

                <ToolbarDivider />

                <ToolbarBtn
                  title="Bold"
                  active={editor?.isActive('bold')}
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                >
                  <Bold className="w-4 h-4" />
                </ToolbarBtn>
                <ToolbarBtn
                  title="Italic"
                  active={editor?.isActive('italic')}
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                >
                  <Italic className="w-4 h-4" />
                </ToolbarBtn>
                <ToolbarBtn
                  title="Underline"
                  active={editor?.isActive('underline')}
                  onClick={() => editor?.chain().focus().toggleUnderline().run()}
                >
                  <UnderlineIcon className="w-4 h-4" />
                </ToolbarBtn>

                <ToolbarDivider />

                <ToolbarBtn
                  title="Rata Kiri"
                  active={editor?.isActive({ textAlign: 'left' })}
                  onClick={() => editor?.chain().focus().setTextAlign('left').run()}
                >
                  <AlignLeft className="w-4 h-4" />
                </ToolbarBtn>
                <ToolbarBtn
                  title="Rata Tengah"
                  active={editor?.isActive({ textAlign: 'center' })}
                  onClick={() => editor?.chain().focus().setTextAlign('center').run()}
                >
                  <AlignCenter className="w-4 h-4" />
                </ToolbarBtn>
                <ToolbarBtn
                  title="Rata Kanan"
                  active={editor?.isActive({ textAlign: 'right' })}
                  onClick={() => editor?.chain().focus().setTextAlign('right').run()}
                >
                  <AlignRight className="w-4 h-4" />
                </ToolbarBtn>

                <ToolbarDivider />

                {/* Quote */}
                <ToolbarBtn
                  title="Kutipan (Quote)"
                  active={editor?.isActive('blockquote')}
                  onClick={() => editor?.chain().focus().toggleBlockquote().run()}
                >
                  <Quote className="w-4 h-4" />
                </ToolbarBtn>

                <ToolbarDivider />

                <ToolbarBtn
                  title="Bullet List"
                  active={editor?.isActive('bulletList')}
                  onClick={() => editor?.chain().focus().toggleBulletList().run()}
                >
                  <List className="w-4 h-4" />
                </ToolbarBtn>
                <ToolbarBtn
                  title="Numbered List"
                  active={editor?.isActive('orderedList')}
                  onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                >
                  <ListOrdered className="w-4 h-4" />
                </ToolbarBtn>

                <ToolbarDivider />

                <div className="flex items-center gap-0.5">
                  <input
                    ref={editorImageInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={insertFileToEditor}
                  />
                  <ToolbarBtn
                    title="Sisipkan Gambar dari File"
                    active={false}
                    onClick={() => editorImageInputRef.current?.click()}
                  >
                    <Upload className="w-4 h-4" />
                  </ToolbarBtn>
                  <ToolbarBtn
                    title="Sisipkan Gambar dari URL"
                    active={false}
                    onClick={insertImageToEditor}
                  >
                    <ImageIcon className="w-4 h-4" />
                  </ToolbarBtn>
                </div>

                <ToolbarDivider />

                <ToolbarBtn
                  title="Embed Video YouTube"
                  active={editor?.isActive('youtube')}
                  onClick={insertYoutube}
                >
                  <PlayCircle className="w-4 h-4" />
                </ToolbarBtn>
              </div>
            </div>

            {/* Editor Area */}
            <div className="px-6 lg:px-8 py-8 min-h-[500px]">
              <EditorContent 
                editor={editor} 
                className="prose prose-invert prose-blue max-w-none focus:outline-none h-full prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-slate-900 prose-blockquote:p-6 prose-blockquote:my-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-slate-300" 
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Publish */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-white mb-4">Publikasi</h3>
            <div className="space-y-3">
              <button
                onClick={() => handleSave('draft')}
                disabled={!form.title}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium px-4 py-2.5 rounded-xl transition-colors text-sm"
              >
                <Save className="w-4 h-4" />
                Simpan sebagai Draft
              </button>
              <button
                onClick={() => handleSave('review')}
                disabled={!isReady}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium px-4 py-2.5 rounded-xl transition-colors text-sm"
              >
                <Send className="w-4 h-4" />
                Kirim Ulang untuk Review
              </button>
            </div>
            <div className="mt-4 flex items-start gap-2 bg-amber-500/5 border border-amber-500/20 rounded-xl p-3">
              <Info className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
              <p className="text-xs text-slate-400 leading-relaxed">
                Artikel yang diedit akan kembali ke status <span className="text-amber-400 font-medium">Menunggu Review</span> dan perlu disetujui admin sebelum dipublikasikan.
              </p>
            </div>
          </div>

          {/* Kategori */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Kategori <span className="text-red-400">*</span>
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled className="bg-slate-900 text-slate-400">Pilih kategori...</option>
              {categories.map((c) => (
                <option key={c} value={c} className="bg-slate-900 text-white">{c}</option>
              ))}
            </select>
          </div>

          {/* Cover Image */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-sm font-semibold text-white mb-4">Gambar Cover</p>
            <div className="flex items-start gap-2 bg-blue-500/5 border border-blue-500/20 rounded-xl p-3 mb-4">
              <Info className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
              <p className="text-xs text-slate-400 leading-relaxed">
                Semua ukuran diterima. Disarankan rasio <span className="text-white font-medium">16:9</span> (misal 1200×630px) agar tampil optimal di listing artikel.
              </p>
            </div>

            <div className="flex rounded-xl border border-slate-700 overflow-hidden mb-4 text-xs font-medium">
              <button
                type="button"
                onClick={() => setCoverMode('upload')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 transition-colors ${
                  coverMode === 'upload' ? 'bg-blue-500/20 text-blue-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                Upload File
              </button>
              <div className="w-px bg-slate-700" />
              <button
                type="button"
                onClick={() => setCoverMode('url')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 transition-colors ${
                  coverMode === 'url' ? 'bg-blue-500/20 text-blue-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5" />
                Dari URL
              </button>
            </div>

            {coverMode === 'upload' && (
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border border-dashed border-slate-700 hover:border-blue-500/50 rounded-xl py-4 flex flex-col items-center gap-2 transition-colors text-slate-400 hover:text-slate-300"
                >
                  <Upload className="w-5 h-5" />
                  <span className="text-xs">Klik untuk pilih gambar</span>
                  <span className="text-xs text-slate-600">PNG, JPG, WEBP</span>
                </button>
              </div>
            )}

            {coverMode === 'url' && (
              <div className="flex gap-2">
                <input
                  type="url"
                  value={coverUrl}
                  onChange={(e) => setCoverUrl(e.target.value)}
                  placeholder="https://..."
                  className="flex-1 min-w-0 bg-slate-950/50 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={handleUrlApply}
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-xl transition-colors shrink-0"
                >
                  Terapkan
                </button>
              </div>
            )}

            <div className="mt-4 rounded-xl overflow-hidden border border-slate-700 bg-slate-950/50">
              {coverPreview ? (
                <img
                  src={coverPreview}
                  alt="Preview cover"
                  className="w-full h-auto object-contain max-h-64"
                  onError={() => setCoverPreview('')}
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 py-10">
                  <ImageIcon className="w-8 h-8 text-slate-700" />
                  <p className="text-xs text-slate-600">Preview gambar cover</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PegawaiArtikelEdit;
