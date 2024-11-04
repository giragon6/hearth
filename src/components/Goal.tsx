type GoalProps = {
    goal: string
}

const Goal = ({ goal }: GoalProps) => {
    return(
        <div className='py-4 text-wrap font-medium object-center'>Goal: {goal}</div>
    )
}

export default Goal;