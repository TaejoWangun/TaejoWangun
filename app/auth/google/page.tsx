import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import API from '../../api/main';
import setToken from '../../lib/auth/setToken';

export default function Google() {
  const router = useRouter();
  const code: string | null = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    const google = async () => API
      .get(`/api/v1/members/googleLogin?code=${code}`)
      .then((response) => setToken({ key: 'accessToken', value: response.data.accessToken }))
      .then(() => router.push('/'));

    if (code) {
      google();
    }
  }, [router, code]);

  return (
    <div>구글 로그인 페이지</div>
  );
}
