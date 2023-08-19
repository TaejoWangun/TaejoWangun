import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-[168px] flex flex-col items-center ">
      <Image
        src="/images/logo_mark.svg"
        alt="로고 이미지"
        width={261}
        height={57}
        className="invisible sm:visible"
      />
      {children}
    </div>
  );
}
