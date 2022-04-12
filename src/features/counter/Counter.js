import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice"

export default function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();    
    const [incrementAmount, setIncrementAmount] = useState(0)
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () =>{
        setIncrementAmount(0);
        dispatch(reset());
    }
    
    useEffect(() =>{
        console.log("counter - component did mount")
        return ()=>{ console.log("counter - component will unmount")}
    },[])

    return (
        <div className="container w-50 border mt-4">
            <div className="container">
                <p>counter {count}</p>
            </div>
            <div className="container">
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div>
                <input type="text" value={incrementAmount} onChange={(e)=>{setIncrementAmount(e.target.value)}} />
                <button onClick={()=>{dispatch(incrementByAmount(addValue))}}>add amount</button>
                <button onClick={resetAll}>reset</button>
            </div>
        </div>
    );
}
