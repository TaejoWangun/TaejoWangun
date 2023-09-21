'use client';

import Header from '../components/Header';
import Description from '../components/Description';
import Button from '../components/Button';

export default function FindPassword() {
  return (
    <>
      <Header text="비밀번호 변경 완료!" />
      <Description text="비밀번호가 성공적으로 재설정되었습니다." />
      <Button text="완료" />
    </>
  );
}
