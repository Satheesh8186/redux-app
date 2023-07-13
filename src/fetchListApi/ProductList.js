import UserApi from "../apiCoustomHook/UseApi";
import ApiCallPromise from "../apiCoustomHook/ApiCallPromise";
const ProductList = () => {
 const{data,loading,error} =  ApiCallPromise("https://dummyjson.com/products") //UserApi("https://dummyjson.com/products")
 console.log("error",error,data,loading);
return (
    <>
    <h1>Api call</h1>
    {loading ? <div>loading...</div> : error ? <div>error...</div> :  (
        data?.products.map((obj) => (
            <h1 key={obj.id}>{obj.title}</h1>
        ))
    )     
    }
    </>
)

}
export default ProductList;