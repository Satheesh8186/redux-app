import React, { useEffect, useState } from "react";
const UserApi = (url) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [error, SetError] = useState()

    useEffect(()=>{
        const fectApi = async() =>{
            setLoading(true)
            try{
                let response = await fetch(url)
                if(!response){
                    throw new Error("Api to call api")
                }
                const responseData = await response.json()
                setData(responseData)
                SetError(null)

            }catch (error){
                console.log("error recived...",error);
                SetError(error)
            }
            setLoading(false)
        }
        fectApi()


    },[url])

    return { data, loading, error };
    
}
export default UserApi;