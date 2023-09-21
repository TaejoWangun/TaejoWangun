interface HeaderProps {
  text: string;
}

export default function Header({ text }: HeaderProps) {
  return <h1 className="text-xl sm:text-3xl font-medium mt-4 mb-2">{text}</h1>;
}
