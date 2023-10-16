interface CSItemProps {
  question: string
  answer: string
}

export default function CSItem({ question, answer }: CSItemProps) {
  return (
    <li className="p-2 text-sm border-t border-gray-300">
      {question}
      {' '}
      :
      {' '}
      {answer}
    </li>
  );
}
