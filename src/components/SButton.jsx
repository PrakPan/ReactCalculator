const SButton=({Btn,handleClick})=>{

return (
  <>
    <button style={{'fontSize':'1.2rem','margin':'1rem','padding':'1rem'}} onClick={()=>handleClick(Btn)}>{Btn}</button>
  </>
)
}
export default SButton;