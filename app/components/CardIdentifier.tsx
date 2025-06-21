interface CardIdentifierProps {
  className?: string;
  content: string;
}

export default function CardIdentifier({ content, className }: CardIdentifierProps) {
  return (
    <div className={`absolute top-4 left-0 h-10 center bg-(--emphasis) rounded-tr-md rounded-br-md ${className}`}>
      <p className="font-bold !text-white">{content}</p>
    </div>
  );
}
