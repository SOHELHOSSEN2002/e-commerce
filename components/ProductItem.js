import Image from 'next/image';
import Link from 'next/link';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <p>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            className="rounded shadow object-cover h-64 w-full"
          />
        </p>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <p>
            <h2 className="text-lg">{product.name}</h2>
          </p>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}