import { useEffect, useState } from "react"

const ApiCallPromise = (url) => {
const[loading,setLoading] = useState(false)
const[data,setDataResponse] = useState(null)
const [error,setError] = useState(null)

useEffect(()=>{
    console.log("called")
    const fetchApiUsingPromise = () => {
        setLoading(true)
        fetch(url)
        .then(response => {
            if(!response){
                throw Error("failed to load")
            }
            return response.json()
        })
        .then(responseData => {
            setDataResponse(responseData)
            setError(null)
        })
        .catch(error => {
            setError(error)
            console.log(error,"eroor");
        })
        .finally(() => {
            setLoading(false)
        })

    }
    fetchApiUsingPromise()
},[])
return {data, loading, error};
}
export default ApiCallPromise;