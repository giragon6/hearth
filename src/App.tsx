import { useState } from "react";
import StreakDisplay from "./components/Streak";
import NavBar from "./components/NavBar";
import Settings from "./components/Settings";
import Goal from "./components/Goal";
import MascotDisplay from "./components/MascotDisplay";
import Button from "./components/utils/Button";
import { useStreakStore } from "./utils/useStreakStore";
import { useDateStore } from "./utils/useDateStore";
import { useGoalStore } from "./utils/useGoalStore";
import getStage from "./utils/Stage";

const App = () => {
  const [isSettingsActive, setIsSettingsActive] = useState(false);
  const [goal, setGoal] = useGoalStore();
  const [lastDate, setLastDate] = useDateStore();
  const [streak, setStreak] = useStreakStore();

  const handleStreakIncrement = () => {
    setStreak((prev) => prev + 1);
    const today = new Date();
    setLastDate(today.toDateString());
  };

  const now = new Date();

  return (
    <>
      <div className="grid p-4 min-w-[300px] bg-bgPrimary text-sm font-serif text-tBase">
        <NavBar
          isSettingsActive={isSettingsActive}
          setIsSettingsActive={setIsSettingsActive}
        />

        {isSettingsActive && <Settings goal={goal} setGoal={setGoal} />}

        <Goal goal={goal} />

        <StreakDisplay streak={streak} />

        <MascotDisplay stage={getStage(streak)} color="red" />

        <Button
          disabled={lastDate == now.toDateString()}
          children="Increase streak"
          className="w-full px-2 py-4 bg-primary enabled:hover:bg-secondarydisabled:opacity-75 disabled:cursor-not-allowed"
          onClick={handleStreakIncrement}
        />
      </div>
    </>
  );
};

export default App;
