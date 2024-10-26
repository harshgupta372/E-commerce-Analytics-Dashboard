import React, { useState, useCallback } from 'react';
import { Editor } from './Editor';
import { Preview } from './Preview';
import { UserList } from './UserList';
import { Split } from 'lucide-react';

const SAMPLE_MARKDOWN = `# Welcome to the Collaborative Editor! 👋

## Features
- Real-time Markdown preview
- GitHub Flavored Markdown support
- Collaborative editing
- Syntax highlighting
- File export

## Example Content

### Code Block
\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

### Table
| Feature | Status |
|---------|--------|
| Markdown | ✅ |
| Preview | ✅ |
| Export | ✅ |

### Image
![Nature](https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80)
`;

export function MarkdownEditor() {
  const [markdown, setMarkdown] = useState(SAMPLE_MARKDOWN);
  const [isPreview, setIsPreview] = useState(false);
  const [isSplit, setIsSplit] = useState(true);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(markdown);
  }, [markdown]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [markdown]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Collaborative Markdown Editor</h1>
          <button
            onClick={() => setIsSplit(!isSplit)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            title="Toggle Split View"
          >
            <Split size={20} />
          </button>
        </div>

        <UserList />

        <div className={`grid ${isSplit ? 'grid-cols-2 gap-4' : 'grid-cols-1'} bg-gray-800 rounded-lg overflow-hidden h-[calc(100vh-12rem)] mt-4`}>
          {(!isPreview || isSplit) && (
            <div className="border-r border-gray-700">
              <Editor
                markdown={markdown}
                onChange={setMarkdown}
                onCopy={handleCopy}
                onDownload={handleDownload}
                isPreview={isPreview}
                togglePreview={() => setIsPreview(!isPreview)}
              />
            </div>
          )}
          {(isPreview || isSplit) && (
            <div className="overflow-auto">
              <Preview markdown={markdown} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}