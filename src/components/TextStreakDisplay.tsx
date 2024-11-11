type TextStreakDisplayProps = {
  streak: number;
};

const TextStreakDisplay = ({ streak }: TextStreakDisplayProps) => {
  return (
    <div className="justify-center font-medium">
      {streak} days
    </div>
  );
};

export default TextStreakDisplay;
