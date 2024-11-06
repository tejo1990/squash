export interface ChatRoom {
  id: string;
  name: string;
  type: 'general' | 'court';
  description?: string;
  participantsCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatMessage {
  id: string;
  roomId: string;
  userId: string;
  nickname: string;
  content: string;
  timestamp: Date;
}

export interface ChatUser {
  id: string;
  nickname: string;
  isTemporary: boolean;
}