'use client';

// import { getToken } from 'firebase/messaging';
// import messaging from '../../firbase';

export default function DeviceMode() {
  const apple = async () => {
    // const token = await getToken(messaging, {
    //   vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
    // });
    // console.log('token', token);
  };

  apple();

  return <p>DeviceMode</p>;
}
