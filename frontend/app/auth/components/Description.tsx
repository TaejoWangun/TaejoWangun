interface DescriptionProps {
  text: string;
}

export default function Description({ text }: DescriptionProps) {
  return (
    <div className="my-8 mx-5 text-sm sm:text-base text-[#828282] ">{text}</div>
  );
}
