import { useContext } from "react";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context.jsx";
import { useParams } from "react-router-dom";
import { $CategoryContainer, $CategoryTitle } from "./category.styles.jsx";

import  ProductCard  from "../../components/product-card/product-card.component.jsx";

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]); // empty by default

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
           <Fragment>
            <$CategoryTitle>{category.toUpperCase()} </$CategoryTitle>
            <$CategoryContainer>
            {
                products &&  // programming defensively against null or undefined !!
                products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
            }
           </$CategoryContainer>
           </Fragment>
    );
}

export default Category;