import { useStreakStore } from '../utils/useStreakStore'
import { useDateStore } from '../utils/useDateStore';
import Button from '../components/Button';
import MascotDisplay from './MascotDisplay';

const Streak = () => {
    const [streak, setStreak] = useStreakStore();
    const [lastDate, setLastDate] = useDateStore();

    const getStage = (streak: number) => {
        if (streak <= 5) return "0";
        if (streak <= 15) return "1";
        if (streak <= 35) return "2";
        return "3"; 
    }

    const handleIncrement = () => {
        setStreak(prev => (prev + 1));
        const today = new Date();
        setLastDate(today.toDateString());
    };

    const now = new Date();

    return (
        <>
            <div className='py-4 text-tBase font-serif font-medium object-center'>Streak: {streak} days</div>
            <MascotDisplay stage={getStage(streak)} color="red" />
            <Button 
                disabled={lastDate == now.toDateString()} 
                text="Increase streak" 
                className='w-full px-2 py-4 bg-primary enabled:hover:bg-secondary text-tBase font-serif disabled:opacity-75 disabled:cursor-not-allowed disabled:' 
                onClick={handleIncrement}
            />
        </>
    )
}

export default Streak