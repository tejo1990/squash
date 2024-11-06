import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// GET 메서드
export async function GET(request: NextRequest) {
  try {
    // 채팅 관련 로직
    return NextResponse.json({ message: 'Success' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST 메서드
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    // 채팅 메시지 처리 로직
    return NextResponse.json({ message: 'Message sent' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
