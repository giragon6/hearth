type ButtonProps = {
  text?: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  disabled?: boolean,
  className?: string,
}

const button = ({ 
  text, 
  onClick, 
  disabled = false, 
  className  
}: ButtonProps ) => {
  
  return (
    <button className={className} onClick={onClick} disabled={disabled}>{text}</button>
  )
}

export default button