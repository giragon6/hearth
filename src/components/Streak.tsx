type StreakProps = {
  streak?: number;
};

const WeekStreakDisplay = ({ streak }: StreakProps) => {
  return (
    <>
      <span className="emoji-flame emoji-flame-inactive">🔥 {streak}</span>
    </>
  )
}

const StreakDisplay = ({ streak }: StreakProps) => {
  return (
    <div className="justify-center font-medium">
      {streak === null ? 0 : streak} days
      <WeekStreakDisplay streak={streak} />
    </div>
  );
};

export default StreakDisplay;
