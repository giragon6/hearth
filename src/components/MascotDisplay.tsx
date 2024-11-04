type MascotProps = {
    type?: string,
    stage?: string,
    color?: string
}

const MascotDisplay = ({ 
    type = "dragon", 
    stage = "1", 
    color = "red" 
}: MascotProps ) => {
  return (
    <>
        <img src={"/assets/images/mascots/"+type+"-"+stage+"-"+color+".PNG"} className='w-full h-64'></img>
    </>
  )
}

export default MascotDisplay