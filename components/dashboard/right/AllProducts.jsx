import axios from "axios"
import { useEffect } from "react"
import data from "../../../utils/data"
import Product from "./Products"
function AllProducts () {
   const { products } = data
    return (
        <>
        <div className="grid grid-cols-5 gap-x-6">
            {/* <img src="" alt="" /> */}
            <p>images</p>
        <p>Product Name: sldhfkjs</p>
        <p>Product category: sldhfkjs</p>
        <p>Product price: $585</p>
        <p>Product stock: 25</p>


{products.map((data)=> <Product data={data}/>)}


        </div>
        </>
    )
}
export default AllProducts