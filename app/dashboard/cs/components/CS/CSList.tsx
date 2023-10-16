interface CSListProps {
  children: React.ReactNode
}

export default function CSList({ children }: CSListProps) {
  return (
    <ul>
      {children}
    </ul>
  );
}
