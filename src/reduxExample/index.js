import { useDispatch, connect } from "react-redux";
import { increment, decrement } from "../actions";
const CounterApp = ({count,increment,decrement}) => {
    // one way of doing with out using mapStateToProps
// const count = useSelector(state => state.counter);
// const dispatch = useDispatch();
    return(
        <>
        <h1>counter app {count}</h1>
        {/* one way of doing with out using mapDispatchToProps
         <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}> Decrement</button> 
        */}
        {/* this the way to dispath the actions  */}
         <button onClick={() => increment()}>increment</button>
        <button onClick={() => decrement()}> Decrement</button> 
        </>
    )
}
const mapStateToProps = (state) => {
    return{
        count : state.counter
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        increment:() => dispatch(increment()),
        decrement:() => dispatch(decrement())
    };

}
export default connect(mapStateToProps,mapDispatchToProps) (CounterApp);