import { NextResponse } from 'next/server';
import { MatchingRequest } from '@/types/matching';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // 실제 구현에서는 데이터베이스에 저장하고 WebSocket으로 매칭 시스템과 연동
    const matchingRequest: MatchingRequest = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
      status: 'waiting',
      createdAt: new Date().toISOString(),
    };
    
    return NextResponse.json(matchingRequest, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: '매칭 요청 생성에 실패했습니다.' },
      { status: 500 }
    );
  }
} 