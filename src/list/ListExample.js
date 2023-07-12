import React, { useState } from "react";
const ListExample = () => {
    const arrayObj = ["a", "b", "c", "d", "e"]
    const OrderList = () => {
        return (
            <>
                <h1>Ordered List Component</h1>
                <ol>
                    <li>ger</li>
                    <li>wefs</li>
                    <li>grtgyeter</li>
                    <li>4wterfew</li>
                </ol>
            </>)
    }
    const UnOrderedList = () => {
        return(
            <>
            <ul>
            <li>ger</li>
                    <li>wefs</li>
                    <li>grtgyeter</li>
                    <li>4wterfew</li> 
            </ul>
            </>
        )
    }
    const OrderedListMap = () => {
        return(
            <>
           <ul>
           {arrayObj.map((obj)=> (
            <li key={obj}>{obj}</li>
           )
           )}
           </ul>
            </>
        )
    }

    return (
        <>
            <OrderList />
            <UnOrderedList />
            <OrderedListMap />
        </>
    )
}
export default ListExample;