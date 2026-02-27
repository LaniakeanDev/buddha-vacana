interface CardIdentifierProps {
  className?: string;
  content: string;
}

export default function CardIdentifier({ content, className }: CardIdentifierProps) {
  return (
    <div className={`absolute top-0 right-0 py-1 center bg-(--emphasis) rounded-bl-md rounded-tr-xl px-2 ${className}`}>
      <p className="font-semibold !text-white">{content}</p>
    </div>
  );
}
