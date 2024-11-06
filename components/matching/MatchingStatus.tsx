'use client';

import { MatchingRequest } from '@/types/matching';

export default function MatchingStatus({ 
  request,
  onCancel
}: { 
  request: MatchingRequest;
  onCancel: () => void;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">매칭 상태</h3>
      <div className="space-y-4">
        <p>현재 상태: {request.status === 'waiting' ? '매칭 대기 중...' : '매칭 완료!'}</p>
        <button
          onClick={onCancel}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          매칭 취소
        </button>
      </div>
    </div>
  );
} 