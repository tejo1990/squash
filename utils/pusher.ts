import PusherServer from 'pusher';

if (!process.env.PUSHER_APP_ID) throw new Error('PUSHER_APP_ID is not defined');
if (!process.env.NEXT_PUBLIC_PUSHER_KEY) throw new Error('NEXT_PUBLIC_PUSHER_KEY is not defined');
if (!process.env.PUSHER_SECRET) throw new Error('PUSHER_SECRET is not defined');
if (!process.env.NEXT_PUBLIC_PUSHER_CLUSTER) throw new Error('NEXT_PUBLIC_PUSHER_CLUSTER is not defined');

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
  useTLS: true
}); 