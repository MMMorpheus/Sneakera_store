import React, { useContext } from "react";

import AppContext from "@/Context";

import { Link } from "react-router-dom";

import { Page, OrdersList, EmptyPage } from "@/styles";
import sadly from "@/assets/sadly.png";

const Orders = () => {
  const {
    state: { ordersProducts },
  } = useContext(AppContext);

  return ordersProducts.length ? (
    <Page>
      <h2>Придбані товари</h2>
      {ordersProducts.map(order => {
        return (
          <OrdersList>
            <p>Номер замовлення: {order.id}</p>
            <p>Дата замовлення: {order.createdAt}</p>
            <ul>
              {order.products.map(product => {
                return <li key={product.id}>
                  <img src={product.imgUrl} />
                  <p>{product.model}</p>
                </li>
              })}
            </ul>
            
          </OrdersList>
        )
      })}
    </Page>
  ) : (
    <EmptyPage>
      <img src={sadly} alt="Sad smile" />
      <h2>У Вас ще не має замовлень</h2>
      <p>Зробіть хоча б одне замовлення, щоб побачити його тут!</p>

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

export default Orders;
