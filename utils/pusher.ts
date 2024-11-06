import PusherServer from 'pusher';
import PusherClient from 'pusher-js';

// 서버 사이드 Pusher 인스턴스
export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!, // 클러스터 설정 추가
  useTLS: true
});

// 클라이언트 사이드 Pusher 인스턴스
export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_KEY!,
  {
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
    forceTLS: true
  }
); 