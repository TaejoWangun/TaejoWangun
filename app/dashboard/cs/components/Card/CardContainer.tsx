interface CardContainerProps {
  name: string
  children: React.ReactNode
}

export default function CardContainer({ name, children }: CardContainerProps) {
  return (
    <div className="w-full min-w-[300px] rounded-md border border-[#006877]">
      <div className="bg-[#006877] font-semibold text-[#FFFFFF] pl-2 py-1">
        {name}
      </div>

      {children}

    </div>
  );
}
