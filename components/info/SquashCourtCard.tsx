interface Court {
  id: string;
  name: string;
  region: string;
}

interface SquashCourtCardProps {
  court: Court;
}

export default function SquashCourtCard({ court }: SquashCourtCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-2">{court.name}</h2>
      <p className="text-gray-600">{court.region}</p>
    </div>
  );
} 