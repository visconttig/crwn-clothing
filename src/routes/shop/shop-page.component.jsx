import { React, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context.jsx";
import CategoryPreview from "../../components/category-preview/category-preview.component.jsx";
import "./shop-page.styles.scss";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <div className="shop-container">
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                        );
                })
            }
        </div>

    );
};

export default Shop;