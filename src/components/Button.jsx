import SButton from "./SButton";

const Button =({handleClick})=>{
  let btn =['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    return (
      <>
         {btn.map(items=> <SButton key ={Math.random()*10} Btn={items} handleClick={()=>handleClick(items)}></SButton>)}
      </>
    )
}
export default Button;