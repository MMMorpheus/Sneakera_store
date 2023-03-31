import {
  GET_ALL_PRODUCTS,
  GET_CART_PRODUCTS,
  GET_FAVOURITE_PRODUCTS,
  SET_SEARCH_VALUE,
  HANDLE_CART,
  ITEAMS_LOADED,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "@/boilerplate";

export default function reducer(state, { type, payload }) {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts:  [...state.allProducts, ...payload],
      };
    case GET_CART_PRODUCTS:
      return {
        ...state,
        cartProducts: [...state.cartProducts, ...payload],
      };
    case GET_FAVOURITE_PRODUCTS:
      return {
        ...state,
        favouriteProducts: [...state.favouriteProducts, ...payload],
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
    case ITEAMS_LOADED:
      return {
        ...state,
        isLoading: payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartProducts: [...state.cartProducts, payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.filter((item) => item.id !== payload),
      };
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favouriteProducts: [...state.favouriteProducts, payload],
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favouriteProducts: state.favouriteProducts.filter((item) => item.id !== payload),
      };
    default:
      return { ...state };
  }
}
