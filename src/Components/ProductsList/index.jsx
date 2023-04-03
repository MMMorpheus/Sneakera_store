import React, { useContext } from "react";
import { ProductCard } from "@/Components";

import AppContext from "@/Context";

import { Loader } from "@/Components";

const ProductsList = ({ requiredItems }) => {
  const {
    state: { cartProducts, favouriteProducts, searchValue, isLoading },
  } = useContext(AppContext);

  const findMarks = (arr, id) => {
    return arr.some((obj) => obj.id === id);
  }

  return (
    <ul>
      {isLoading
        ? [...Array(8)].map((_, index) => {
            return (
              <li key={index}>
                <Loader />
              </li>
            );
          })
        : requiredItems &&
          requiredItems
            .filter((item) =>
              item.model.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  product={item}
                  added={findMarks(cartProducts, item.id)}
                  favourited={findMarks(favouriteProducts, item.id)}
                />
              );
            })}
    </ul>
  );
};

export default ProductsList;
