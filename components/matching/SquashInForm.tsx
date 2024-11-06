'use client';

import { useState } from 'react';
import { PlayerProfile, TimeSlot } from '@/types/matching';

type SkillLevel = '상급' | '중상급' | '중급' | '초중급' | '초급' | '상관없음';
type PlayStyle = '전투적/공격적' | '수비적/안정적' | '기술적/전략적' | '체력 중심적';
type GameStyle = '랠리 위주' | '숏볼/킬샷 위주' | '실제 시합 방식' | '연습 위주';
type PreferredAtmosphere = '진지한 분위기' | '친목 위주' | '체력 운동 위주' | '기술 향상 위주';

export default function SquashInForm({ 
  onSubmit 
}: { 
  onSubmit: (data: Omit<PlayerProfile, 'id' | 'createdAt'>) => void 
}) {
  const [formData, setFormData] = useState({
    nickname: '',
    location: '',
    skillLevel: '상관없음' as SkillLevel,
    playStyle: '전투적/공격적' as PlayStyle,
    gameStyle: '랠리 위주' as GameStyle,
    preferredAtmosphere: '친목 위주' as PreferredAtmosphere,
    availableTimeSlots: [] as TimeSlot[]
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(formData);
    }} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">스쿼시 선수 등록</h2>
      
      {/* 기본 정보 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">닉네임</label>
        <input
          type="text"
          value={formData.nickname}
          onChange={(e) => setFormData({...formData, nickname: e.target.value})}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">활동지역</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData({...formData, location: e.target.value})}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          required
        />
      </div>

      {/* 실력 수준 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">실력 수준</label>
        <select
          value={formData.skillLevel}
          onChange={(e) => setFormData({...formData, skillLevel: e.target.value as SkillLevel})}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="상급">상급 (대회 출전 경험자)</option>
          <option value="중상급">중상급 (3년 이상 경험자)</option>
          <option value="중급">중급 (1-3년 경험자)</option>
          <option value="초중급">초중급 (6개월-1년 경험자)</option>
          <option value="초급">초급 (6개월 미만)</option>
          <option value="상관없음">상관없음</option>
        </select>
      </div>

      {/* 플레이 스타일 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">플레이 스타일</label>
        <select
          value={formData.playStyle}
          onChange={(e) => setFormData({...formData, playStyle: e.target.value as PlayStyle})}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="전투적/공격적">전투적/공격적</option>
          <option value="수비적/안정적">수비적/안정적</option>
          <option value="기술적/전략적">기술적/전략적</option>
          <option value="체력 중심적">체력 중심적</option>
        </select>
      </div>

      {/* 게임 성향 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">게임 성향</label>
        <select
          value={formData.gameStyle}
          onChange={(e) => setFormData({...formData, gameStyle: e.target.value as GameStyle})}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="랠리 위주">랠리 위주</option>
          <option value="숏볼/킬샷 위주">숏볼/킬샷 위주</option>
          <option value="실제 시합 방식">실제 시합 방식</option>
          <option value="연습 위주">연습 위주</option>
        </select>
      </div>

      {/* 매칭 분위기 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">선호하는 매칭 분위기</label>
        <select
          value={formData.preferredAtmosphere}
          onChange={(e) => setFormData({...formData, preferredAtmosphere: e.target.value as PreferredAtmosphere})}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="진지한 분위기">진지한 분위기</option>
          <option value="친목 위주">친목 위주</option>
          <option value="체력 운동 위주">체력 운동 위주</option>
          <option value="기술 향상 위주">기술 향상 위주</option>
        </select>
      </div>

      {/* 선호 시간대 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">선호 시간대</label>
        <div className="space-y-2">
          {[
            { id: 'WEEKDAY_MORNING', label: '평일 오전 (06:00-12:00)' },
            { id: 'WEEKDAY_AFTERNOON', label: '평일 오후 (12:00-18:00)' },
            { id: 'WEEKDAY_EVENING', label: '평일 저녁 (18:00-24:00)' },
            { id: 'WEEKEND_MORNING', label: '주말 오전 (06:00-12:00)' },
            { id: 'WEEKEND_AFTERNOON', label: '주말 오후 (12:00-18:00)' },
            { id: 'WEEKEND_EVENING', label: '주말 저녁 (18:00-24:00)' },
          ].map((timeSlot) => (
            <div key={timeSlot.id} className="flex items-center">
              <input
                type="checkbox"
                id={timeSlot.id}
                checked={formData.availableTimeSlots.includes(timeSlot.id as TimeSlot)}
                onChange={(e) => {
                  const updatedTimeSlots = e.target.checked
                    ? [...formData.availableTimeSlots, timeSlot.id as TimeSlot]
                    : formData.availableTimeSlots.filter(slot => slot !== timeSlot.id);
                  setFormData({...formData, availableTimeSlots: updatedTimeSlots});
                }}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <label htmlFor={timeSlot.id} className="ml-2 text-sm text-gray-700">
                {timeSlot.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        등록하기
      </button>
    </form>
  );
} 