function Left ({ setComponents }) {
    console.log(setComponents)
    return (
        <>
        <div>
            <button onClick={()=> setComponents("allProducts")}>All product</button>
        </div>
        </>
    )
}
export default Left