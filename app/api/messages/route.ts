import { NextResponse } from 'next/server';
import { pusherServer } from '@/lib/pusher';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { roomId, message, nickname } = body;

    // DB에 메시지 저장
    // const savedMessage = await db.messages.create({ ... });

    // Pusher를 통해 실시간 메시지 전송
    await pusherServer.trigger(`chat-${roomId}`, 'new-message', {
      id: Date.now().toString(),
      roomId,
      nickname,
      content: message,
      timestamp: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 