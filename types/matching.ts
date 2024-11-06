export type SkillLevel = '상급' | '중상급' | '중급' | '초중급' | '초급' | '상관없음';
export type TimeSlot = '평일 오전' | '평일 오후' | '평일 저녁' | '주말 오전' | '주말 오후' | '주말 저녁';
export type PlayStyle = '전투적/공격적' | '수비적/안정적' | '기술적/전략적' | '체력 중심적';
export type GameStyle = '랠리 위주' | '숏볼/킬샷 위주' | '실제 시합 방식' | '연습 위주';
export type MatchAtmosphere = '진지한 분위기' | '친목 위주' | '체력 운동 위주' | '기술 향상 위주';

export interface PlayerProfile {
  id: string;
  nickname: string;
  location: string;
  skillLevel: SkillLevel;
  playStyle: PlayStyle;
  gameStyle: GameStyle;
  preferredAtmosphere: MatchAtmosphere;
  availableTimeSlots: TimeSlot[];
  createdAt: string;
}

export interface MatchingRequest {
  id: string;
  playerId: string;
  playerCount: number;
  timeSlot: TimeSlot;
  status: 'waiting' | 'matched' | 'completed' | 'cancelled';
  createdAt: string;
} 