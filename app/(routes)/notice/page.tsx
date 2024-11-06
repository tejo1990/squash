'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/shared/Navigation';
import NoticeCard from '@/components/notice/NoticeCard';
import CategoryFilter from '@/components/notice/CategoryFilter';
import { Notice } from '@/types/notice';

export default function NoticePage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [isLoading, setIsLoading] = useState(true);
  const categories = ['전체', '일반', '대회', '이벤트', '점검'];

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('/api/notices');
        const data = await response.json();
        setNotices(data);
      } catch (error) {
        console.error('Failed to fetch notices:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotices();
  }, []);

  const filteredNotices = selectedCategory === '전체'
    ? notices
    : notices.filter(notice => notice.category === selectedCategory);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-100 pb-20 md:pb-0 md:pt-20">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">공지사항</h1>
          <div>로딩 중...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 pb-20 md:pb-0 md:pt-20">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          공지사항
        </h1>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        <div className="space-y-4">
          {filteredNotices.map(notice => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      </div>
    </main>
  );
}
