import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { pusherServer } from '@/utils/pusher';

export const dynamic = 'force-dynamic';

// GET 메서드 추가
export async function GET() {
  return NextResponse.json({ message: 'Messages API endpoint' });
}

// POST 메서드 수정
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    if (!data.roomId || !data.message || !data.sender) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Pusher 트리거
    await pusherServer.trigger(
      `chat-${data.roomId}`,
      'message',
      {
        message: data.message,
        sender: data.sender,
        timestamp: new Date().toISOString()
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Message sending error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// 타입 정의 추가
interface MessageData {
  roomId: string;
  message: string;
  sender: string;
} 