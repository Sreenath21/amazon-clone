import { useEffect, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState();
  const [hasPrime, setHasPrime] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setHasPrime(Math.random() < 0.5);
  }, []);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };

    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 hover:shadow-lg hover:scale-[1.02] ">
      <p className="absolute top-2 right-2 text-sm italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500 " />
          ))}
      </div>

      <p className="text-sm my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img src="https://rb.gy/37u0ea" alt="" className="w-12" />
          <p className="text-sm text-gray-500">Free Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button" onClick={addItemToBasket}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
