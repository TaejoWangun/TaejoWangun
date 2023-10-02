import Image from 'next/image';
import Link from 'next/link';

type Props = {
  checked: boolean
  id: number
  name: string
  type: string
};

export default function ModalItem({
  checked,
  id,
  name,
  type,
}: Props) {
  return (
    <li
      key={id}
    >
      <Link href={`?modal=true&id=${id}`} className={`flex items-center gap-2 p-3 border rounded-md ${checked ? 'bg-[#FFF4D3] border-main border-2' : ''}`}>
        <div className="rounded-full border-[#FFF1C7] border-4 bg-[#FFE69B] w-8 h-8 flex justify-center">
          <Image src="/images/credit_card_refresh.svg" width={15} height={15} alt="card" />
        </div>
        <div className="flex justify-between text-sm grow text-letter">
          <div>
            <h2>{name}</h2>
            <p>{type}</p>
          </div>
          <div>
            {
            checked
              ? <Image src="/images/checkbox_checked.svg" width={15} height={15} alt="card" />
              : <Image src="/images/checkbox.svg" width={15} height={15} alt="card" />
          }
          </div>
        </div>
      </Link>
    </li>
  );
}
