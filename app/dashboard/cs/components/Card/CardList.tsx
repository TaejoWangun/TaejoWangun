interface CardListProps {
  children: React.ReactNode
}

export default function CardList({ children }: CardListProps) {
  return (
    <ul>
      {children}
    </ul>
  );
}
