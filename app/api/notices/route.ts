import { NextResponse } from 'next/server';
import type { Notice } from '@/types/notice';

// 임시 데이터
const mockNotices: Notice[] = [
  {
    id: '1',
    title: '4월 전국 스쿼시 대회 안내',
    content: '4월 전국 스쿼시 대회가 개최됩니다. 많은 참여 부탁드립니다.',
    date: '2024-04-15',
    category: '대회',
    isImportant: true
  },
  {
    id: '2',
    title: '시스템 정기 점검 안내',
    content: '서비스 개선을 위한 정기 점검이 진행됩니다.',
    date: '2024-04-10',
    category: '점검',
    isImportant: false
  },
  {
    id: '3',
    title: '스쿼시 강습 프로그램 안내',
    content: '초보자를 위한 스쿼시 강습 프로그램이 시작됩니다.',
    date: '2024-04-08',
    category: '일반',
    isImportant: false
  },
  {
    id: '4',
    title: '친선 경기 이벤트 안내',
    content: '주말 친선 경기 이벤트를 개최합니다.',
    date: '2024-04-05',
    category: '이벤트',
    isImportant: false
  }
];

export async function GET() {
  try {
    // 실제 구현에서는 데이터베이스에서 데이터를 가져옵니다
    return NextResponse.json(mockNotices);
  } catch (error) {
    return NextResponse.json(
      { error: '공지사항을 불러오는데 실패했습니다.' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const notice = await request.json();
    // 실제 구현에서는 데이터베이스에 저장합니다
    return NextResponse.json(
      { message: '공지사항이 생성되었습니다.' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: '공지사항 생성에 실패했습니다.' },
      { status: 500 }
    );
  }
}