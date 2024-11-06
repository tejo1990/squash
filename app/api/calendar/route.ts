import { NextResponse } from 'next/server';
import type { CalendarEvent } from '@/types/calendar';

// 임시 데이터
const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: '전국 스쿼시 대회',
    date: '2024-04-15',
    type: 'tournament',
    description: '전국 스쿼시 동호인 대회',
    location: '서울 올림픽 체육관',
    startTime: '09:00',
    endTime: '18:00'
  },
  {
    id: '2',
    title: '정기 연습',
    date: '2024-04-20',
    type: 'practice',
    description: '정기 연습 세션',
    location: '스쿼시장',
    startTime: '14:00',
    endTime: '16:00'
  }
];

export async function GET() {
  // 실제 구현에서는 데이터베이스에서 이벤트를 가져옵니다
  return NextResponse.json(mockEvents);
}

export async function POST(request: Request) {
  try {
    return NextResponse.json({ message: '이벤트가 생성되었습니다.' });
  } catch (_error: unknown) {
    console.error('Error:', _error);
    return NextResponse.json(
      { error: '오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
