interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="h-16 w-[300px] sm:w-[545px] rounded-md bg-[#FFC000] font-semibold"
      type="submit"
    >
      {text}
    </button>
  );
}
