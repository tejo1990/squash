import { NextResponse } from 'next/server';
import { pusherServer } from '@/utils/pusher';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    await pusherServer.trigger(`chat-${data.roomId}`, 'message', {
      message: data.message,
      sender: data.sender,
      timestamp: new Date()
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Message sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 