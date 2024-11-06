 'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  
  const navItems = [
    { name: '이벤트', path: '/' },
    { name: '달력', path: '/calendar' },
    { name: '채팅', path: '/chat' },
    { name: '공지', path: '/notice' },
    { name: '게임매치', path: '/match' },
    { name: '정보', path: '/info' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-lg md:top-0 md:bottom-auto">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`px-3 py-2 rounded-lg transition-colors ${
              pathname === item.path
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-blue-100'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;