function Product({ data }) {
    return (
        <>
          <p>images</p>
        <p>{data.name}</p>
        <p>{data.category}</p>
        <p>{data.price}</p>
        <p>{data.countInStock}</p>
        </>
    )
}
export default Product