interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="w-[300px] sm:w-[580px] h-10 sm:h-16 bg-[#FFC000] rounded-full font-medium text-sm sm:text-xl mb-6 sm:mb-10"
      type="submit"
    >
      {text}
    </button>
  );
}
