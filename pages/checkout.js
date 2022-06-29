import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";

function checkout() {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const total = useSelector(selectTotal);

  return (
    <div className="bg-gray-100">
      <Header />

      <div className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://rb.gy/5y6y84"
            alt=""
            objectFit="contain"
            width={1020}
            height={250}
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Your shopping basket"}
            </h1>

            {items.map(
              ({
                id,
                title,
                rating,
                price,
                description,
                category,
                image,
                hasPrime,
              }) => (
                <CheckoutProduct
                  key={id}
                  id={id}
                  title={title}
                  rating={rating}
                  price={price}
                  image={image}
                  description={description}
                  category={category}
                  hasPrime
                />
              )
            )}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold">
                  <Currency quantity={total} currency="GBP" />
                </span>
              </h2>

              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign int to checkout" : "Proceed to check out"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default checkout;