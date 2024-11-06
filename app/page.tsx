import Navigation from '../components/shared/Navigation';
import EventCard from '../components/events/EventCard';
import { Event } from '../types/event';

// 임시 데이터 (실제로는 API나 데이터베이스에서 가져올 예정)
const mockEvents: Event[] = [
  {
    id: '1',
    title: '2024 전국 스쿼시 대회',
    description: '전국 스쿼시 동호인들이 모이는 연례 대회입니다.',
    date: '2024-04-15',
    location: '서울 올림픽 체육관',
    imageUrl: '/images/tournament.jpg',
  },
  // 더 많은 이벤트 추가...
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 pb-20 md:pb-0 md:pt-20">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          최신 스쿼시 이벤트
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </main>
  );
}