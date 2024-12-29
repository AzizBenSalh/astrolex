interface TopicButtonProps {
  id: string;
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

export function TopicButton({ id, title, isSelected, onClick }: TopicButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full transition-colors ${
        isSelected
          ? 'bg-purple-600 text-white'
          : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
      }`}
    >
      {title}
    </button>
  );
}