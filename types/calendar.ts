export interface CalendarEvent {
    id: string;
    title: string;
    date: string;
    startTime?: string;
    endTime?: string;
    type: 'tournament' | 'practice' | 'meeting' | 'other';
    description?: string;
    location?: string;
    participants?: string[];
  }
  
  export interface DayEvents {
    date: Date;
    events: CalendarEvent[];
  }
  
  export interface CalendarViewProps {
    events: CalendarEvent[];
    onEventClick?: (event: CalendarEvent) => void;
    onDateClick?: (date: Date) => void;
  }