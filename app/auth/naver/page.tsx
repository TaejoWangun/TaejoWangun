import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import API from '../../api/main';
import setToken from '../../lib/auth/setToken';

export default function Naver() {
  const router = useRouter();
  const code: string | null = new URL(window.location.href).searchParams.get('code');
  const state: string | null = new URL(window.location.href).searchParams.get('state');

  useEffect(() => {
    const naver = async () => API
      .get(`/api/v1/members/naverLogin?code=${code}&state=${state}`)
      .then((response) => setToken({ key: 'accessToken', value: response.data.accessToken }))
      .then(() => router.push('/'));

    if (code) {
      naver();
    }
  }, [router, code, state]);

  return (
    <div>네이버 로그인 페이지</div>
  );
}
