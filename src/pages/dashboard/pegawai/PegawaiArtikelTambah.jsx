import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle, FontSize } from '@tiptap/extension-text-style';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import Youtube from '@tiptap/extension-youtube';
import {
  ArrowLeft, Save, Send, Upload, Link as LinkIcon,
  Bold, Italic, Underline as UnderlineIcon,
  AlignLeft, AlignCenter, AlignRight,
  List, ListOrdered, ImageIcon, PlayCircle, Info, X, Quote
} from 'lucide-react';

const FONT_SIZES = [
  { label: 'Default', value: '' },
  { label: '12px', value: '12px' },
  { label: '14px', value: '14px' },
  { label: '16px', value: '16px' },
  { label: '18px', value: '18px' },
  { label: '20px', value: '20px' },
  { label: '24px', value: '24px' },
  { label: '32px', value: '32px' },
];

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

const ToolbarDivider = () => (
  <div className="w-px h-5 bg-slate-700 mx-1 self-center" />
);

const PegawaiArtikelTambah = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({ title: '', category: '', excerpt: '' });
  const [coverPreview, setCoverPreview] = useState('');
  const [coverMode, setCoverMode] = useState('upload');
  const [coverUrl, setCoverUrl] = useState('');
  const [submitted, setSubmitted] = useState(null);
  const [activeFontSize, setActiveFontSize] = useState('');
  const [, setUpdateTick] = useState(0);

  // Modal State for Prompt
  const [promptModal, setPromptModal] = useState({ isOpen: false, type: '', url: '' });

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      Underline,
      TextStyle,
      FontSize,
      TextAlign.configure({ types: ['paragraph'] }),
      Image.configure({ inline: false, allowBase64: true }),
      Youtube.configure({ width: '100%', height: 360, nocookie: true }),
      Placeholder.configure({ placeholder: 'Mulai menulis artikel di sini...' }),
    ],
    editorProps: {
      attributes: { class: 'tiptap-editor outline-none' },
    },
  });

  useEffect(() => {
    if (!editor) return;
    const sync = () => {
      setActiveFontSize(editor.getAttributes('textStyle').fontSize || '');
      setUpdateTick(t => t + 1);
    };
    editor.on('selectionUpdate', sync);
    editor.on('transaction', sync);
    return () => {
      editor.off('selectionUpdate', sync);
      editor.off('transaction', sync);
    };
  }, [editor]);

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

  const openImagePrompt = () => setPromptModal({ isOpen: true, type: 'image', url: '' });
  const openYoutubePrompt = () => setPromptModal({ isOpen: true, type: 'youtube', url: '' });

  const handlePromptSubmit = () => {
    if (promptModal.url && editor) {
      if (promptModal.type === 'image') {
        editor.chain().focus().setImage({ src: promptModal.url }).run();
      } else if (promptModal.type === 'youtube') {
        editor.chain().focus().setYoutubeVideo({ src: promptModal.url }).run();
      }
    }
    setPromptModal({ isOpen: false, type: '', url: '' });
  };

  const insertFileToEditor = (e) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;
    const url = URL.createObjectURL(file);
    editor.chain().focus().setImage({ src: url }).run();
    e.target.value = '';
  };

  const editorImageInputRef = useRef(null);

  const isReady = form.title && form.excerpt && form.category && editor?.getText().trim().length > 0;

  const handleSave = (type) => {
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
          {submitted === 'draft' ? 'Disimpan sebagai Draft' : 'Dikirim untuk Review'}
        </h2>
        <p className="text-slate-400 text-sm">Mengalihkan ke daftar artikel...</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Tambah Artikel | Koribali Portal</title>
      </Helmet>

      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard/pegawai/artikel')}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-700"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Tulis Artikel Baru</h1>
            <p className="text-slate-400 text-sm">Lengkapi informasi dan tulis konten menarik Anda.</p>
          </div>
        </div>
        
        {/* Quick Actions Mobile (Optional) */}
        <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => handleSave('draft')}
              disabled={!form.title}
              className="flex-1 flex justify-center items-center gap-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium px-4 py-2.5 rounded-xl transition-colors text-sm border border-slate-700"
            >
              <Save className="w-4 h-4" />
              Draft
            </button>
            <button
              onClick={() => handleSave('review')}
              disabled={!isReady}
              className="flex-1 flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium px-4 py-2.5 rounded-xl transition-colors text-sm shadow-lg shadow-blue-500/20"
            >
              <Send className="w-4 h-4" />
              Kirim
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Main Column */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6 lg:gap-8">
          
          {/* Writing Area (Title + Editor) */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl flex flex-col shadow-xl shadow-black/20 overflow-hidden">
            {/* Title Input */}
            <div className="px-6 lg:px-8 pt-8 pb-4 border-b border-slate-800 bg-slate-900">
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Judul Artikel..."
                className="w-full bg-transparent text-white text-3xl md:text-4xl font-bold placeholder-slate-700 focus:outline-none"
              />
            </div>
            
            {/* Toolbar */}
            <div className="px-6 lg:px-8 py-3 border-b border-slate-800 bg-slate-950/30 flex items-center overflow-x-auto">
              <div className="flex flex-wrap items-center gap-1 min-w-max">
                {/* Font Size */}
                <select
                  title="Ukuran Font"
                  value={activeFontSize}
                  onChange={(e) => {
                    const size = e.target.value;
                    setActiveFontSize(size);
                    if (size) {
                      editor?.chain().focus().setFontSize(size).run();
                    } else {
                      editor?.chain().focus().unsetFontSize().run();
                    }
                  }}
                  className="bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer mr-1"
                >
                  {FONT_SIZES.map(({ label, value }) => (
                    <option key={label} value={value}>{label}</option>
                  ))}
                </select>

                <ToolbarDivider />

                {/* Format */}
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

                {/* Alignment */}
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

                {/* Lists */}
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

                {/* Insert Media */}
                <div className="flex items-center gap-1">
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
                    onClick={openImagePrompt}
                  >
                    <ImageIcon className="w-4 h-4" />
                  </ToolbarBtn>
                  <ToolbarBtn
                    title="Embed Video YouTube"
                    active={editor?.isActive('youtube')}
                    onClick={openYoutubePrompt}
                  >
                    <PlayCircle className="w-4 h-4" />
                  </ToolbarBtn>
                </div>
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

        {/* Sidebar Column */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6 lg:gap-8">
          
          {/* Card: Publikasi */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl shadow-black/20 hidden lg:block sticky top-6">
            <h3 className="text-base font-bold text-white mb-5 flex items-center gap-2">
              <Send className="w-4 h-4 text-blue-400" /> Publikasi
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => handleSave('draft')}
                disabled={!form.title}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium px-4 py-3 rounded-xl transition-colors text-sm border border-slate-700"
              >
                <Save className="w-4 h-4" />
                Simpan Draft
              </button>
              <button
                onClick={() => handleSave('review')}
                disabled={!isReady}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium px-4 py-3 rounded-xl transition-colors text-sm shadow-lg shadow-blue-500/20"
              >
                <Send className="w-4 h-4" />
                Kirim Review
              </button>
            </div>
            <div className="mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-2">
               <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
               <p className="text-xs text-slate-400">
                 Semua bagian (<span className="text-red-400">*</span>) wajib terisi.
               </p>
            </div>
          </div>

          {/* Card: Detail Artikel */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 shadow-xl shadow-black/20">
            
            {/* Kategori */}
            <div>
              <h3 className="text-sm font-bold text-white mb-3">Kategori <span className="text-red-400">*</span></h3>
              <div className="relative">
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors appearance-none cursor-pointer pr-10"
                >
                  <option value="" disabled className="bg-slate-900 text-slate-400">Pilih kategori...</option>
                  {categories.map((c) => (
                    <option key={c} value={c} className="bg-slate-900 text-white">{c}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-800/80 w-full" />

            {/* Ringkasan */}
            <div>
              <label className="text-sm font-bold text-white mb-3 flex justify-between items-end">
                <span>Ringkasan <span className="text-red-400">*</span></span>
                <span className="text-slate-500 font-normal text-xs">{form.excerpt.length}/200</span>
              </label>
              <textarea
                name="excerpt"
                value={form.excerpt}
                onChange={handleChange}
                rows={4}
                placeholder="Intisari artikel untuk preview..."
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors resize-none"
              />
            </div>

            <div className="h-px bg-slate-800/80 w-full" />

            {/* Cover Image */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <p className="text-sm font-bold text-white">Gambar Cover</p>
              </div>
              
              {/* Mode Tabs */}
              <div className="flex rounded-xl border border-slate-700 overflow-hidden mb-4 text-xs font-medium bg-slate-950/50">
                <button
                  type="button"
                  onClick={() => setCoverMode('upload')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 transition-colors ${
                    coverMode === 'upload'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  Upload
                </button>
                <div className="w-px bg-slate-700" />
                <button
                  type="button"
                  onClick={() => setCoverMode('url')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 transition-colors ${
                    coverMode === 'url'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                  URL
                </button>
              </div>

              {/* Upload File */}
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
                    className="w-full bg-slate-950/50 border border-dashed border-slate-600 hover:border-blue-500 rounded-xl py-6 flex flex-col items-center gap-3 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-800 group-hover:bg-blue-500/20 flex items-center justify-center transition-colors">
                       <Upload className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
                    </div>
                    <div className="text-center">
                       <span className="block text-sm font-medium text-slate-300 group-hover:text-blue-400 transition-colors">Pilih gambar</span>
                       <span className="block text-xs text-slate-500 mt-1">PNG, JPG, WEBP</span>
                    </div>
                  </button>
                </div>
              )}

              {/* URL Input */}
              {coverMode === 'url' && (
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={coverUrl}
                    onChange={(e) => setCoverUrl(e.target.value)}
                    placeholder="https://..."
                    className="flex-1 min-w-0 bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={handleUrlApply}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-sm font-medium rounded-xl transition-colors shrink-0"
                  >
                    Cek
                  </button>
                </div>
              )}

              {/* Preview */}
              <div className="mt-4 rounded-xl overflow-hidden border border-slate-700 bg-slate-950/50 flex flex-col justify-center min-h-[140px]">
                {coverPreview ? (
                  <div className="relative group">
                     <img
                       src={coverPreview}
                       alt="Preview cover"
                       className="w-full h-auto object-cover max-h-48"
                       onError={() => setCoverPreview('')}
                     />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <button
                         onClick={() => { setCoverPreview(''); setCoverUrl(''); }}
                         className="bg-red-500/20 text-red-400 border border-red-500/50 rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-red-500 hover:text-white transition-colors"
                       >
                         Hapus
                       </button>
                     </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2 py-8 px-4 text-center">
                    <ImageIcon className="w-8 h-8 text-slate-700 mb-1" />
                    <p className="text-xs text-slate-500">Belum ada gambar yang dipilih. Aspek rasio 16:9 disarankan.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Prompt Custom */}
      {promptModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative transform transition-all">
            <button 
              onClick={() => setPromptModal({ isOpen: false, type: '', url: '' })}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-6">
               <h3 className="text-xl font-bold text-white mb-2">
                 {promptModal.type === 'image' ? 'Sisipkan URL Gambar' : 'Embed Video YouTube'}
               </h3>
               <p className="text-slate-400 text-sm">
                 Tempelkan tautan {promptModal.type === 'image' ? 'gambar' : 'video'} di kolom bawah ini untuk menambahkannya ke artikel.
               </p>
            </div>
            <input
              type="url"
              value={promptModal.url}
              onChange={(e) => setPromptModal({ ...promptModal, url: e.target.value })}
              placeholder="https://..."
              className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors mb-6"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') handlePromptSubmit();
              }}
            />
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setPromptModal({ isOpen: false, type: '', url: '' })}
                className="px-5 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700"
              >
                Batal
              </button>
              <button
                onClick={handlePromptSubmit}
                disabled={!promptModal.url}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-xl transition-colors shadow-lg shadow-blue-500/20"
              >
                Sisipkan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PegawaiArtikelTambah;
