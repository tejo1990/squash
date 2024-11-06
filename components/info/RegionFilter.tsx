interface RegionFilterProps {
    regions: string[];
    selectedRegion: string;
    onRegionSelect: (region: string) => void;
  }
  
  export default function RegionFilter({ regions, selectedRegion, onRegionSelect }: RegionFilterProps) {
    return (
      <div className="flex gap-2 flex-wrap">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => onRegionSelect(region)}
            className={`px-4 py-2 rounded-full ${
              selectedRegion === region
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {region}
          </button>
        ))}
      </div>
    );
  }