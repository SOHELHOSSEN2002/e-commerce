import { useState } from "react"
import Left from "../components/dashboard/left/Left"
import AllProducts from "../components/dashboard/right/AllProducts"
function dashboard () {
    const [components, setComponents] = useState("allProducts")
    return(
        <>
        <div className=" w-full flex">
            <div className="w-1/4" >
           <Left setComponents = {setComponents} /> 
            </div>
            <div className="w-3/4">
                {components===""? "": ""}
                { components === "allProducts"? (<AllProducts/>):"" }
            </div>
        </div>
        </>
    )
}

export default dashboard