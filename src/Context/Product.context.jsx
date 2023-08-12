/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { INITIAL__STATE, productReducer } from "../Reducer/ProductReducer";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [productData, dispatch] = useReducer(productReducer, INITIAL__STATE);
  console.log(
    "🚀 ~ file: Product.context.jsx:10 ~ ProductProvider ~ productData:",
    productData
  );
  return (
    <ProductContext.Provider value={{ productData, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);

export default ProductProvider;
