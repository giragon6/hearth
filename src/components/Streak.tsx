type StreakProps = {
  streak?: number;
};

const StreakDisplay = ({ streak }: StreakProps) => {
  return (
    <div className="font-medium">
      Streak: {streak === null ? 0 : streak} days
    </div>
  );
};

export default StreakDisplay;
