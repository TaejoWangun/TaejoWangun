const googleClientId = '124768656971-3vk88k3dnvbv3kdomrsb84t5mls68vbt.apps.googleusercontent.com';
const googleRedirectUrl = 'http://localhost:3000/auth/google';

const naverClientID = '';
const naverRedirectUrl = '';
const naverStateString = '';

export const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&scope=openid%20profile%20email&redirect_uri=${googleRedirectUrl}`;

export const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${naverClientID}&response_type=code&redirect_uri=${naverRedirectUrl}&state=${naverStateString}`;
