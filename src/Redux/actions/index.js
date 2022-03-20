import { productListApi } from '../../Utils/api';


export const increment = () => {
  return {
    type: "plus",
  };
};

export const decrement = () => {
  return {
    type: "minus",
  };
};

/*export const setproductlist = (productList) => {
  return {
    type: "SET_PRODUCT_LIST",
    payload: productList,
  };
};*/
export const setproductlist = (productList) => {
  return {
    type: "SET_PRODUCT_LIST",
    payload: productList,
  };
};

export const setproductlistThunk = () => {
    return async(dispatch) => {
        const data = await productListApi();
        dispatch(setproductlist(data));
    };
};
