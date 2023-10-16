interface CardItemProps {
  description: string
}

export default function CardItem({ description }: CardItemProps) {
  return (
    <li className="p-2 text-sm border-t border-[#006877]">
      {description}
    </li>
  );
}
