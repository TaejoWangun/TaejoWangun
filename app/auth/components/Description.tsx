interface DescriptionProps {
  text: string;
}

export default function Description({ text }: DescriptionProps) {
  return <h2 className="mb-6 text-xs sm:text-base sm:mb-10 ">{text}</h2>;
}
