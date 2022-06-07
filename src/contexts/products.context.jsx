import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";

const data = SHOP_DATA;


export const ProductsContext = createContext({
    products: [],
    setData: () => null
});


export const ProductsContextProvider = ({children}) => {
    const [shopData, setShopData] = useState(data);
    let values = {shopData, setShopData};

    return (
        <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>
    );
};