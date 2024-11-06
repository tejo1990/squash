import { useState, useRef, useEffect } from 'react';
import type { ChatRoom as ChatRoomType, ChatMessage } from '@/types/chat';
import { pusherClient } from '@/lib/pusher';

interface ChatRoomProps {
  room: ChatRoomType;
  nickname: string;
  onNicknameChange: () => void;
}

export default function ChatRoom({ room, nickname, onNicknameChange }: ChatRoomProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Pusher 채널 구독
    const channel = pusherClient.subscribe(`chat-${room.id}`);
    
    channel.bind('new-message', (message: ChatMessage) => {
      setMessages(prev => [...prev, message]);
    });

    return () => {
      pusherClient.unsubscribe(`chat-${room.id}`);
    };
  }, [room.id]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roomId: room.id,
          message: newMessage,
          nickname,
        }),
      });

      setNewMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <div className="h-[600px] flex flex-col">
      {/* 채팅방 헤더 */}
      <div className="p-4 border-b flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-lg">{room.name}</h2>
          <p className="text-sm text-gray-500">{room.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">{nickname}</span>
          <button
            onClick={onNicknameChange}
            className="text-sm text-blue-500 hover:text-blue-600"
          >
            닉네임 변경
          </button>
        </div>
      </div>

      {/* 채팅 메시지 영역 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col ${
              message.nickname === nickname ? 'items-end' : 'items-start'
            }`}
          >
            <span className="text-sm text-gray-600">{message.nickname}</span>
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.nickname === nickname
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100'
              }`}
            >
              {message.content}
            </div>
            <span className="text-xs text-gray-400">
              {new Date(message.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* 메시지 입력 영역 */}
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="메시지를 입력하세요"
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            전송
          </button>
        </div>
      </form>
    </div>
  );
}