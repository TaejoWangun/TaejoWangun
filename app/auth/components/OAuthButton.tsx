import Link from 'next/link';
import Image from 'next/image';

interface OAuthButtonProps {
  text: string,
  logo: string
  address: string
  alt: string
}

export default function OAuthButton({
  text, logo, address, alt,
}: OAuthButtonProps) {
  return (
    <Link
      href={address}
      className="w-[300px] sm:w-[580px] h-10 sm:h-16 rounded-full font-medium text-sm sm:text-xl mb-4 sm:mb-8 border border-black  leading-10 sm:leading-[60px] flex justify-center gap-2 items-center"
    >
      <Image
        src={logo}
        alt={alt}
        width={16}
        height={16}
        className="sm:h-6 sm:w-6"
      />
      {text}
    </Link>
  );
}
