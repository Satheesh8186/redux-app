import UserApi from "../apiCoustomHook/UseApi";
const ProductList = () => {
 const{data,loading,error} = UserApi("https://dummyjson.com/products")
 console.log("error",error);
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