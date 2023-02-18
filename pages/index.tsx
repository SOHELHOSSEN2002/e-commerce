import axios from "axios";
import Image from "next/image";
import { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import Product from "../models/Product";
import db from "../utils/db";
import { Store } from "../utils/Store";

export default function Home({ products, featuredProducts }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });

    toast.success("Product added to the cart");
  };

  return (
    <Layout title="Home Page">
      <div className=" bg-orange-300 flex justify-start">
        <Image
          src="/../public/images/banner.jpg"
          width={1920}
          height={1080}
          alt="image"
          className="w-full h-64 mb-2"
        />

        <div className="absolute flex justify-start text-5xl text-center top-32 left-32  ">
          <p className="bg-orange-300 border-b-8 border-indigo-600 border-t-4 rounded-md">
            <span className="">Discount</span>
            <br></br>

            <span className="right-0 ">50%</span>
          </p>

          <div>
            <p className="font-bold left-8 text-5xl pl-8">
              <span className="text-red-500   ">Going to</span>
              <br></br>
              <span className=" text-amber-600">Online Shop</span>
            </p>
          </div>
        </div>
      </div>
      <h2 className="h2 my-4">
        <p className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-center text-2xl ">
          Latest Products
        </p>

        <hr></hr>
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            addToCartHandler={addToCartHandler}
          ></ProductItem>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  const featuredProducts = await Product.find({ isFeatured: true }).lean();
  return {
    props: {
      featuredProducts: featuredProducts.map(db.convertDocToObj),
      products: products.map(db.convertDocToObj),
    },
  };
}
