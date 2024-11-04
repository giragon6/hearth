import Button from "./Button"

type NavBarProps = {
    isSettingsActive: boolean,
    setIsSettingsActive: (arg0: boolean) => void
}

const NavBar = ({ isSettingsActive, setIsSettingsActive }: NavBarProps) => {
    return(
        <nav className='grid grid-cols-10 grid-rows-1 bg-bgPrimary h-4'>
        <h1 className='col-span-full text-center text-tBase text-lg font-bold font-serif content-center'>Hearth</h1>
        <Button onClick={() => setIsSettingsActive(!isSettingsActive)} children="⚙" className='text-tBase text-lg rounded-lg bg-primary hover:bg-secondary'/>
        </nav>
    )
}

export default NavBar;