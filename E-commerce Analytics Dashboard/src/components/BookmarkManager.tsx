import React, { useState } from 'react';
import { Bookmark, FolderPlus, Search, Star, Trash2, Plus } from 'lucide-react';

interface BookmarkItem {
  id: string;
  title: string;
  url: string;
  favorite: boolean;
  folder?: string;
}

export function BookmarkManager() {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([
    {
      id: '1',
      title: 'GitHub',
      url: 'https://github.com',
      favorite: true,
      folder: 'Dev Tools'
    },
    {
      id: '2',
      title: 'Stack Overflow',
      url: 'https://stackoverflow.com',
      favorite: true,
      folder: 'Dev Tools'
    },
    {
      id: '3',
      title: 'Netflix',
      url: 'https://netflix.com',
      favorite: false,
      folder: 'Entertainment'
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newBookmark, setNewBookmark] = useState({ title: '', url: '', folder: '' });
  const [showAddForm, setShowAddForm] = useState(false);

  const folders = Array.from(new Set(bookmarks.map(b => b.folder).filter(Boolean)));
  
  const filteredBookmarks = bookmarks.filter(bookmark => 
    bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bookmark.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavorite = (id: string) => {
    setBookmarks(bookmarks.map(bookmark =>
      bookmark.id === id ? { ...bookmark, favorite: !bookmark.favorite } : bookmark
    ));
  };

  const deleteBookmark = (id: string) => {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  };

  const addBookmark = (e: React.FormEvent) => {
    e.preventDefault();
    if (newBookmark.title && newBookmark.url) {
      setBookmarks([...bookmarks, {
        id: Date.now().toString(),
        ...newBookmark,
        favorite: false
      }]);
      setNewBookmark({ title: '', url: '', folder: '' });
      setShowAddForm(false);
    }
  };

  return (
    <div className="w-[400px] bg-gray-900 text-gray-100 rounded-lg shadow-xl">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-blue-400" />
            <h1 className="text-lg font-semibold">Bookmarks</h1>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            title="Add Bookmark"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search bookmarks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {showAddForm && (
        <form onSubmit={addBookmark} className="p-4 border-b border-gray-800">
          <input
            type="text"
            placeholder="Title"
            value={newBookmark.title}
            onChange={(e) => setNewBookmark({ ...newBookmark, title: e.target.value })}
            className="w-full mb-2 p-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="url"
            placeholder="URL"
            value={newBookmark.url}
            onChange={(e) => setNewBookmark({ ...newBookmark, url: e.target.value })}
            className="w-full mb-2 p-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={newBookmark.folder}
            onChange={(e) => setNewBookmark({ ...newBookmark, folder: e.target.value })}
            className="w-full mb-2 p-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Folder</option>
            {folders.map(folder => (
              <option key={folder} value={folder}>{folder}</option>
            ))}
          </select>
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
            >
              Add Bookmark
            </button>
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="max-h-[400px] overflow-y-auto">
        {folders.map(folder => (
          <div key={folder} className="border-b border-gray-800">
            <div className="flex items-center gap-2 p-3 bg-gray-800/50">
              <FolderPlus className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium">{folder}</span>
            </div>
            {filteredBookmarks
              .filter(bookmark => bookmark.folder === folder)
              .map(bookmark => (
                <div
                  key={bookmark.id}
                  className="flex items-center justify-between p-3 hover:bg-gray-800/30 transition-colors"
                >
                  <a
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 truncate"
                  >
                    <div className="text-sm font-medium">{bookmark.title}</div>
                    <div className="text-xs text-gray-400 truncate">{bookmark.url}</div>
                  </a>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleFavorite(bookmark.id)}
                      className={`p-1 rounded-md hover:bg-gray-700 transition-colors ${
                        bookmark.favorite ? 'text-yellow-400' : 'text-gray-400'
                      }`}
                    >
                      <Star className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteBookmark(bookmark.id)}
                      className="p-1 rounded-md hover:bg-gray-700 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}