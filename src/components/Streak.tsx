import { useStreakStore } from '../utils/useStreakStore'
import { useDateStore } from '../utils/useDateStore';
import Button from '../components/Button';
import MascotDisplay from './MascotDisplay';

const Streak = () => {
    const [streak, setStreak] = useStreakStore();
    const [lastDate, setLastDate] = useDateStore();

    const handleIncrement = () => {
        setStreak(prev => (prev + 1));
        const today = new Date();
        setLastDate(today.toDateString());
    };

    const now = new Date();

    return (
        <>
            <div className='object-center'>Streak: {streak} days</div>
            <MascotDisplay stage="1" color="red" />
            <Button 
                disabled={lastDate == now.toDateString()} 
                text="Increase streak" 
                className='w-full px-2 py-4 bg-primary' 
                onClick={handleIncrement}
            />
        </>
    )
}

export default Streak