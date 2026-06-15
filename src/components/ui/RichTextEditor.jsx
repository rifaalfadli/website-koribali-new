import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Bold, Italic, Strikethrough, Quote, List, ListOrdered, Heading2, Heading3 } from 'lucide-react';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const toggleClass = (isActive) => 
    `p-1.5 rounded-lg transition-colors ${isActive ? 'bg-blue-500/20 text-blue-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`;

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 bg-slate-900 border-b border-slate-700 rounded-t-xl">
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBold().run(); }}
        className={toggleClass(editor.isActive('bold'))}
        title="Tebal"
      >
        <Bold className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleItalic().run(); }}
        className={toggleClass(editor.isActive('italic'))}
        title="Miring"
      >
        <Italic className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleStrike().run(); }}
        className={toggleClass(editor.isActive('strike'))}
        title="Coret"
      >
        <Strikethrough className="w-4 h-4" />
      </button>
      <div className="w-px h-5 bg-slate-700 mx-1" />
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 2 }).run(); }}
        className={toggleClass(editor.isActive('heading', { level: 2 }))}
        title="Heading 2"
      >
        <Heading2 className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 3 }).run(); }}
        className={toggleClass(editor.isActive('heading', { level: 3 }))}
        title="Heading 3"
      >
        <Heading3 className="w-4 h-4" />
      </button>
      <div className="w-px h-5 bg-slate-700 mx-1" />
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBlockquote().run(); }}
        className={toggleClass(editor.isActive('blockquote'))}
        title="Kutipan (Quote)"
      >
        <Quote className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBulletList().run(); }}
        className={toggleClass(editor.isActive('bulletList'))}
        title="Bullet List"
      >
        <List className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleOrderedList().run(); }}
        className={toggleClass(editor.isActive('orderedList'))}
        title="Ordered List"
      >
        <ListOrdered className="w-4 h-4" />
      </button>
    </div>
  );
};

const RichTextEditor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: content || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-invert prose-slate prose-p:my-2 prose-headings:my-3 max-w-none min-h-[300px] p-4 bg-slate-950/50 rounded-b-xl focus:outline-none border-t-0 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-slate-900 prose-blockquote:p-4 prose-blockquote:my-4 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-slate-300',
      },
    },
  });

  // Update editor content if it changes externally
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      // Small optimization: only update if it's different and we aren't currently focused (to avoid jumping cursor)
      if (!editor.isFocused) {
          editor.commands.setContent(content);
      }
    }
  }, [content, editor]);

  return (
    <div className="border border-slate-700 rounded-xl overflow-hidden shadow-inner focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/50 transition-colors">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
