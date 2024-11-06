'use client';

import { useState } from 'react';
import Navigation from '@/components/shared/Navigation';
import SquashInForm from '@/components/matching/SquashInForm';
import MatchingForm from '@/components/matching/MatchingForm';
import MatchingStatus from '@/components/matching/MatchingStatus';
import { PlayerProfile, MatchingRequest } from '@/types/matching';

export default function MatchPage() {
  const [playerProfile, setPlayerProfile] = useState<PlayerProfile | null>(null);
  const [activeRequest, setActiveRequest] = useState<MatchingRequest | null>(null);

  const handleSquashIn = async (data: Omit<PlayerProfile, 'id' | 'createdAt'>) => {
    try {
      const response = await fetch('/api/players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setPlayerProfile(result);
    } catch (error) {
      console.error('선수 등록 실패:', error);
    }
  };

  const handleMatchingSubmit = async (matchData: { 
    playerCount: number;
    timeSlot: string;
  }) => {
    if (!playerProfile) return;

    try {
      const response = await fetch('/api/matching', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          playerId: playerProfile.id,
          ...matchData
        }),
      });
      const result = await response.json();
      setActiveRequest(result);
    } catch (error) {
      console.error('매칭 요청 실패:', error);
    }
  };

  const handleMatchingCancel = async () => {
    if (!activeRequest) return;
    try {
      await fetch(`/api/matching/${activeRequest.id}`, {
        method: 'DELETE',
      });
      setActiveRequest(null);
    } catch (error) {
      console.error('매칭 취소 실패:', error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 pb-20 md:pb-0 md:pt-20">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">게임 매칭</h1>
        
        {!playerProfile ? (
          <SquashInForm onSubmit={handleSquashIn} />
        ) : !activeRequest ? (
          <MatchingForm 
            onSubmit={handleMatchingSubmit} 
          />
        ) : (
          <MatchingStatus 
            request={activeRequest} 
            onCancel={handleMatchingCancel} 
          />
        )}
      </div>
    </main>
  );
}
