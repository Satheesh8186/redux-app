import { useMemo, useState } from "react";

const UseMemoHooks = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [counter3, setCounter3] = useState(0)
   const button1CLicked = () => {
        setCounter1(counter1 + 1)
    }
    const button2CLicked = () => {
        setCounter2(counter2 + 1)
    }
    const button3CLicked = () => {
        setCounter3(counter3 + 1)
    }
    const checkOddOrEven = useMemo(() => {
        let i = 0
        while (i < 1000000) i++;
        return counter1%2 ===0 ? "even" : "odd"
    },[counter1])
    return (
        <>
        <h1>use memos</h1>
        <h4>counter 1 - {counter1} - {checkOddOrEven}</h4>
        <h4>counter 2 - {counter2}</h4>
        <h4>counter 3 - {counter3}</h4>
        <button className="mb-3" onClick={button1CLicked}>counter 1</button> <br/> 
        <button className="mb-2" onClick={button2CLicked}>counter 2</button> <br/>
        <button className="mb-2" onClick={button3CLicked}>counter 3</button> <br/>
        </>
    )
}
export default UseMemoHooks;