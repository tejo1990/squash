'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  getDaysInMonth, 
  startOfMonth, 
  format, 
  addMonths, 
  subMonths,
  isSameDay,
  parseISO
} from 'date-fns';
import { ko } from 'date-fns/locale';
import { CalendarEvent as CalendarEventType } from '../../types/calendar';
import CalendarEvent from './CalendarEvent';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<CalendarEventType[]>([]);
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = startOfMonth(currentDate).getDay();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/calendar');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handlePrevMonth = () => {
    setCurrentDate(prev => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => addMonths(prev, 1));
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      isSameDay(parseISO(event.date), date)
    );
  };

  const handleDateClick = (date: Date) => {
    console.log('Selected date:', date);
    // 여기에 날짜 클릭 시 수행할 작업을 추가할 수 있습니다
  };

  const handleEventClick = (event: CalendarEventType) => {
    console.log('Selected event:', event);
    // 여기에 이벤트 클릭 시 수행할 작업을 추가할 수 있습니다
  };

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold">
          {format(currentDate, 'yyyy년 M월', { locale: ko })}
        </h2>
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map(day => (
          <div key={day} className="text-center font-semibold py-2 text-gray-600">
            {day}
          </div>
        ))}
        
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="p-2 min-h-[100px]" />
        ))}
        
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            index + 1
          );
          const dayEvents = getEventsForDate(date);

          return (
            <div
              key={index + 1}
              onClick={() => handleDateClick(date)}
              className="p-2 min-h-[100px] border border-gray-100 hover:bg-gray-50 cursor-pointer"
            >
              <div className="font-semibold mb-1">{index + 1}</div>
              <div className="space-y-1">
                {dayEvents.map(event => (
                  <CalendarEvent
                    key={event.id}
                    event={event}
                    onClick={handleEventClick}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
