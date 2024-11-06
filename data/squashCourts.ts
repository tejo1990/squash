import { SquashCourt } from '@/types/squashCourt';

export const squashCourts: SquashCourt[] = [
  {
    id: 'gunpo-greenhill',
    name: '그린힐 스쿼시',
    region: '군포',
    facilities: {
      courts: [
        {
          type: 'WSF 국제공인 단식코트',
          count: 3,
          description: '안양, 산본 유일'
        },
        {
          type: 'WSF 국제공인 복식코트',
          count: 1
        }
      ],
      location: 'B2층',
      amenities: ['전용 사물함']
    },
    hours: {
      weekday: '06:00 ~ 22:00',
      saturday: '06:00 ~ 21:00',
      holiday: '09:00 ~ 19:00'
    },
    pricing: {
      monthly: '65,000원 (다이나믹 스쿼시)',
      yearly: '전관 이용권 포함'
    },
    features: [
      '전국 대회 다수 우승 동호인회 보유',
      '전 국가대표 출신 강사진의 체계적인 지도',
      '스쿼시 선수반 운영 (세계대회, 전국체전 등 다수 대회 금메달)'
    ],
    closedDays: [
      '매월 두번째 수요일',
      '매월 네번째 목요일',
      '설날/추석 당일과 전후 (3일)',
      '1월 1일'
    ],
    contact: {
      address: '경기도 군포시 산본로 276',
      phone: '031-398-5600'
    }
  },
  {
    id: 'anyang-squash',
    name: '안양스쿼시클럽',
    region: '안양',
    facilities: {
      courts: [
        {
          type: 'WSF 국제공인 단식코트',
          count: 2,
          description: '냉난방 완비'
        }
      ],
      location: '3층',
      amenities: ['샤워실', '락커룸']
    },
    hours: {
      weekday: '06:00 ~ 23:00',
      saturday: '07:00 ~ 21:00',
      holiday: '09:00 ~ 18:00'
    },
    pricing: {
      monthly: '55,000원',
      yearly: '600,000원'
    },
    features: [
      '초보자 강습반 운영',
      'friendly한 동호회 분위기',
      '주차 무료'
    ],
    closedDays: [
      '공휴일',
      '설날/추석 연휴'
    ],
    contact: {
      address: '경기도 안양시 동안구 관평로 182',
      phone: '031-123-4567'
    }
  }
]; 