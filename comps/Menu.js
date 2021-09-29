

const Menu = ({onShow, showMenu}) => {
  return(
    <div onClick={onShow} className=" bg-black grid grid-cols-2 gap-0.5 relative z-20 border-2 border-white p-1 ">
        <div className="box h-3 w-3 bg-black border-2 border-white "> </div>
        <div className="box h-3 w-3 bg-white border-2 border-white "> </div>
        <div className="box bg-white h-3 w-3 border-2 border-white "> </div>
        <div className="box bg-black h-3 w-3 border-2 border-white "> </div>
    </div>  
    )
}

export default Menu


