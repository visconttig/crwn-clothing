import { createContext, useState, useEffect } from "react";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import { getCategoriesAndDocumentsFromDb } from "../utils/firebase/firebase.utils.js";



export const CategoriesContext = createContext({
    categoriesMap: {},
    setData: () => null
});


export const CategoriesContextProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    let values = {categoriesMap, setCategoriesMap};
    
    // useEffect(() => {    // initial saving of products to DB
    //     addCollectionAndDocuments("categories", SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategories = async () => {
            const categoriesMap = await getCategoriesAndDocumentsFromDb();
            console.log(categoriesMap);
            setCategoriesMap(categoriesMap);
        }

        getCategories();
    }, []);

    return (
        <CategoriesContext.Provider value={values}>{children}</CategoriesContext.Provider>
    );
};