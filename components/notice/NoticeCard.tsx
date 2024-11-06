'use client';

import { Notice } from '@/types/notice';

interface NoticeCardProps {
  notice: Notice;
}

export default function NoticeCard({ notice }: NoticeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-2">
        <span className={`px-2 py-1 text-xs rounded-full 
          ${notice.isImportant ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
          {notice.category}
        </span>
        {notice.isImportant && (
          <span className="text-red-500 text-sm">중요</span>
        )}
      </div>
      <h3 className="text-lg font-semibold mb-2">{notice.title}</h3>
      <p className="text-gray-600 mb-4">{notice.content}</p>
      <time className="text-sm text-gray-500">{notice.date}</time>
    </div>
  );
} 