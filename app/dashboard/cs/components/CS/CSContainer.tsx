interface CSContinerProps {
  name: string
  children: React.ReactNode
}

export default function CSContainer({ name, children }: CSContinerProps) {
  return (
    <div className="w-full min-w-[300px] rounded-lg border border-gray-300">
      <div className="font-semibold pl-2 py-1">
        {name}
      </div>
      {children}
    </div>
  );
}
