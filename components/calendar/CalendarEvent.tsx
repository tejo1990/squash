'use client';

import { CalendarEvent as CalendarEventType } from '../../types/calendar';

interface CalendarEventProps {
  event: CalendarEventType;
  onClick?: (event: CalendarEventType) => void;
}

function CalendarEvent({ event, onClick }: CalendarEventProps) {
  const eventTypeColors = {
    tournament: 'bg-red-100 text-red-800 border-red-200',
    practice: 'bg-blue-100 text-blue-800 border-blue-200',
    meeting: 'bg-green-100 text-green-800 border-green-200',
    other: 'bg-gray-100 text-gray-800 border-gray-200'
  };

  return (
    <div
      onClick={() => onClick?.(event)}
      className={`
        px-2 py-1 rounded-md text-sm cursor-pointer
        border transition-colors hover:opacity-80
        ${eventTypeColors[event.type]}
      `}
    >
      <div className="font-semibold truncate">{event.title}</div>
      {event.startTime && (
        <div className="text-xs opacity-75">
          {event.startTime}
          {event.endTime && ` - ${event.endTime}`}
        </div>
      )}
    </div>
  );
}

export default CalendarEvent;
