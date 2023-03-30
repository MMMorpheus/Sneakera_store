import {
  GET_ALL_PRODUCTS,
  GET_CART_PRODUCTS,
  GET_FAVOURITE_PRODUCTS,
  SET_SEARCH_VALUE,
  HANDLE_CART,
  REMOVE_FROM_CART
} from "@/boilerplate";

export default function reducer(state, { type, payload }) {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts:  [...state.allProducts, payload],
      };
    case GET_CART_PRODUCTS:
      return {
        ...state,
        cartProducts: [...state.cartProducts, payload],
      };
    case GET_FAVOURITE_PRODUCTS:
      return {
        ...state,
        favouriteProducts: [...state.favouriteProducts, payload],
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: payload,
      };
    case HANDLE_CART:
      return {
        ...state,
        isCartOpened: payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.filter((item) => item.id !== payload),
      };
    default:
      return { ...state };
  }
}
