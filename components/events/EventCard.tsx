import Image from 'next/image';
import { Event } from '../../types/event';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {event.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-2">{event.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{new Date(event.date).toLocaleDateString()}</span>
          {event.location && <span>{event.location}</span>}
        </div>
      </div>
    </div>
  );
};

export default EventCard;