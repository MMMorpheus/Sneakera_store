import React, { useContext } from "react";
import { ProductsList } from "@/Components";

import AppContext from "@/Context";

import { Link } from "react-router-dom";

import { Page, EmptyPage } from "@/styles";
import sad from "@/assets/sadly.png";

const Favourites = () => {
  const {
    state: { favouriteProducts },
  } = useContext(AppContext);

  return favouriteProducts.length ? (
    <Page>
      <h2>Товари, додані у обране</h2>
      <ProductsList requiredItems={favouriteProducts} />
    </Page>
  ) : (
    <EmptyPage>
      <img src={sad} alt="Sad smile" />
      <h2>Обрані товари відсутні :(</h2>
      <p>Ви нічого не додавали у обране</p>

      <Link to={"/"}>
        <div>
          Повернутись назад
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7144 7L1.00007 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 13L1 7L7 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Link>
    </EmptyPage>
  );
};

export default Favourites;
