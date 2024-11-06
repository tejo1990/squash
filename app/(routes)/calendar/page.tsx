'use client';

import Navigation from '@/components/shared/Navigation';
import Calendar from '@/components/calendar/Calendar';

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-gray-100 pb-20 md:pb-0 md:pt-20">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          스쿼시 일정
        </h1>
        <Calendar />
      </div>
    </main>
  );
}
