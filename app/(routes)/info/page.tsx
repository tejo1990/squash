'use client';

import { useState } from 'react';
import Navigation from '@/components/shared/Navigation';
import { squashCourts } from '@/data/squashCourts';
import SquashCourtCard from '@/components/info/SquashCourtCard';
import RegionFilter from '@/components/info/RegionFilter';
import { SquashCourt } from '@/types/squashCourt';

// 컴포넌트 외부로 이동하여 재렌더링 방지
const regions = ['전체', ...Array.from(new Set(squashCourts?.map(court => court.region) || []))];

export default function InfoPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>('전체');

  const filteredCourts: SquashCourt[] = selectedRegion === '전체'
    ? squashCourts
    : squashCourts.filter(court => court.region === selectedRegion);

  return (
    <main className="min-h-screen bg-gray-100 pb-20 md:pb-0 md:pt-20">
      <Navigation />
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          스쿼시장 정보
        </h1>

        <RegionFilter
          regions={regions}
          selectedRegion={selectedRegion}
          onRegionSelect={setSelectedRegion}
        />

        <div className="mt-6">
          {filteredCourts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourts.map((court) => (
                <SquashCourtCard 
                  key={court.id} 
                  court={court} 
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-8">
              해당 지역에 등록된 스쿼시장이 없습니다.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
