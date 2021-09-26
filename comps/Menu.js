

const Menu = ({onShow, showMenu}) => {
  return(
    <div onClick={onShow} class=" bg-black grid grid-cols-2 gap-0.5 border-2 border-white p-1 ">
        <div class="box h-3 w-3 bg-black border-2 border-white "> </div>
        <div class="box h-3 w-3 bg-white border-2 border-white "> </div>
        <div class="box bg-white h-3 w-3 border-2 border-white "> </div>
        <div class="box bg-black h-3 w-3 border-2 border-white "> </div>
    </div>  
    )
}

export default Menu


