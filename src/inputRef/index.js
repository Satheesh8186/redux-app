import { useRef, forwardRef } from "react";

function ParentCom (){
    const inputRef = useRef();
   const buttonClick = () => {
        inputRef.current.value = "hello world";
    }
    return (
        <div>
            <h1>parent</h1>
            <Child ref={inputRef}/>
            <button onClick={buttonClick}>update text</button>
        </div>
    )
}
export default ParentCom;

const Child = forwardRef((props,ref) => {
   return(
    <input ref={ref}/>
   )
});