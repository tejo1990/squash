'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/shared/Navigation';
import ChatRoomList from '@/components/chat/ChatRoomList';
import ChatRoom from '@/components/chat/ChatRoom';
import NicknameModal from '@/components/chat/NicknameModal';
import { squashCourts } from '@/data/squashCourts';
import type { ChatRoom as ChatRoomType } from '@/types/chat';

// 채팅방 목록 생성
const chatRooms: ChatRoomType[] = [
  {
    id: 'squash-in',
    name: 'SquashIn',
    type: 'general',
    description: '모든 스쿼시인을 위한 공용 채팅방',
    participantsCount: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  ...squashCourts.map(court => ({
    id: court.id,
    name: court.name,
    type: 'court' as const,
    description: `${court.region} 스쿼시장 채팅방`,
    participantsCount: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  }))
];

export default function ChatPage() {
  const [selectedRoom, setSelectedRoom] = useState<ChatRoomType | null>(null);
  const [nickname, setNickname] = useState<string>('');
  const [showNicknameModal, setShowNicknameModal] = useState(true);

  useEffect(() => {
    // 로컬 스토리지에서 닉네임 확인
    const savedNickname = localStorage.getItem('chat-nickname');
    if (savedNickname) {
      setNickname(savedNickname);
      setShowNicknameModal(false);
    }
  }, []);

  const handleNicknameSubmit = (newNickname: string) => {
    setNickname(newNickname);
    localStorage.setItem('chat-nickname', newNickname);
    setShowNicknameModal(false);
  };

  return (
    <main className="min-h-screen bg-gray-100 pb-20 md:pb-0 md:pt-20">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">채팅</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 채팅방 목록 */}
          <div className="md:col-span-1 bg-white rounded-lg shadow">
            <ChatRoomList
              rooms={chatRooms}
              selectedRoom={selectedRoom}
              onRoomSelect={setSelectedRoom}
            />
          </div>

          {/* 채팅방 */}
          <div className="md:col-span-2 bg-white rounded-lg shadow">
            {selectedRoom ? (
              <ChatRoom
                room={selectedRoom}
                nickname={nickname}
                onNicknameChange={() => setShowNicknameModal(true)}
              />
            ) : (
              <div className="p-8 text-center text-gray-500">
                채팅방을 선택해주세요
              </div>
            )}
          </div>
        </div>

        {/* 닉네임 설정 모달 */}
        {showNicknameModal && (
          <NicknameModal
            onSubmit={handleNicknameSubmit}
            onClose={() => {
              if (nickname) setShowNicknameModal(false);
            }}
          />
        )}
      </div>
    </main>
  );
}
