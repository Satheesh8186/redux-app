import React, { useState } from "react";
const ListExample = () => {
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

    return (
        <>
            <OrderList />
            <UnOrderedList />
        </>
    )
}
export default ListExample;