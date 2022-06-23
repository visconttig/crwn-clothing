import { createContext, useState } from "react";
// import SHOP_DATA from "../shop-data";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import { getCategoriesAndDocumentsFromDb } from "../utils/firebase/firebase.utils.js";
import { useEffect } from "react";


// const data = SHOP_DATA;


export const ProductsContext = createContext({
    products: [],
    setData: () => null
});


export const ProductsContextProvider = ({children}) => {
    const [shopData, setShopData] = useState([]);
    let values = {shopData, setShopData};
    
    // useEffect(() => {    // initial saving of products to DB
    //     addCollectionAndDocuments("categories", SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategories = async () => {
            const categoriesMap = await getCategoriesAndDocumentsFromDb();
            console.log(categoriesMap);
        }

        getCategories();
    }, []);

    return (
        <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>
    );
};