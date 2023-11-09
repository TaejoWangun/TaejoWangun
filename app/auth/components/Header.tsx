interface HeaderProps {
  text: string;
}

export default function Header({ text }: HeaderProps) {
  return <h1 className="mt-4 mb-2 text-xl font-medium sm:text-3xl">{text}</h1>;
}
