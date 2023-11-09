interface CSContinerProps {
  name: string
  children: React.ReactNode
}

export default function CSContainer({ name, children }: CSContinerProps) {
  return (
    <div className="w-full min-w-[300px] rounded-lg border border-gray-300">
      <div className="py-1 pl-2 font-semibold">
        {name}
      </div>
      {children}
    </div>
  );
}
