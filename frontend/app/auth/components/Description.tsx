interface DescriptionProps {
  text: string;
}

export default function Description({ text }: DescriptionProps) {
  return <h2 className="text-xs sm:text-base mb-6 sm:mb-10 ">{text}</h2>;
}
