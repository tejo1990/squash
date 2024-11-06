import type { ChatRoom } from '@/types/chat';

interface ChatRoomListProps {
  rooms: ChatRoom[];
  selectedRoom: ChatRoom | null;
  onRoomSelect: (room: ChatRoom) => void;
}

export default function ChatRoomList({ rooms, selectedRoom, onRoomSelect }: ChatRoomListProps) {
  return (
    <div className="h-[600px] overflow-y-auto">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-lg">채팅방 목록</h2>
      </div>
      <div className="divide-y">
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`p-4 cursor-pointer hover:bg-gray-50 ${
              selectedRoom?.id === room.id ? 'bg-gray-50' : ''
            }`}
            onClick={() => onRoomSelect(room)}
          >
            <h3 className="font-medium">{room.name}</h3>
            {room.description && (
              <p className="text-sm text-gray-500">{room.description}</p>
            )}
            <p className="text-xs text-gray-400 mt-1">
              참여자 {room.participantsCount}명
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 