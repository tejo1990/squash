import { useState, useEffect } from 'react';

interface NicknameModalProps {
  onSubmit: (nickname: string) => void;
  onClose: () => void;
}

const FAMOUS_SQUASH_PLAYERS = [
  'Jahangir Khan',
  'Jansher Khan',
  'Peter Nicol',
  'Amr Shabana',
  'Ramy Ashour',
  'Mohamed El Shorbagy',
  'Ali Farag',
  'Nour El Sherbini',
  'Nicol David',
  'Raneem El Welily'
];

export default function NicknameModal({ onSubmit, onClose }: NicknameModalProps) {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    // 랜덤 닉네임 생성
    const randomNickname = FAMOUS_SQUASH_PLAYERS[
      Math.floor(Math.random() * FAMOUS_SQUASH_PLAYERS.length)
    ];
    setNickname(randomNickname);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nickname.trim()) {
      onSubmit(nickname);
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">닉네임 설정</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              닉네임
            </label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="닉네임을 입력하세요"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => {
                const randomNickname = FAMOUS_SQUASH_PLAYERS[
                  Math.floor(Math.random() * FAMOUS_SQUASH_PLAYERS.length)
                ];
                setNickname(randomNickname);
              }}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              랜덤 생성
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              확인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 