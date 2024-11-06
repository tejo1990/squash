import { NextResponse } from 'next/server';
import { PlayerProfile } from '@/types/matching';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const playerProfile: PlayerProfile = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
      createdAt: new Date().toISOString(),
    };
    
    // 실제 구현에서는 데이터베이스에 저장
    return NextResponse.json(playerProfile, { status: 201 });
  } catch (error) {
    console.error('Error fetching players:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
} 