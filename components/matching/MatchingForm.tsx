'use client';

import { useState } from 'react';
import { MatchingRequest } from '@/types/matching';

export default function MatchingForm({ onSubmit }: { onSubmit: (data: Omit<MatchingRequest, 'id' | 'status' | 'createdAt'>) => void }) {
  const [formData] = useState({
    playerId: '',
    location: '',
    playerCount: 1,
    timeSlot: '평일 저녁' as const,
    skillLevel: '상관없음' as const,
    playStyle: '전투적/공격적' as const,
    gameStyle: '랠리 위주' as const,
    atmosphere: '친목 위주' as const
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
      {/* 폼 필드들 */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        매칭 시작
      </button>
    </form>
  );
} 