import { React } from "react";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context.jsx";
import ProductCard from "../../components/product-card/product-card.component.jsx";

import "./shop-page.styles.scss";

const Shop = () => {
    const { shopData } = useContext(ProductsContext);

    return (
        <div className="products-container">
            {shopData.map((product) => (
                <ProductCard product={product} key={product.id}/>
            ))};
        </div>
    )
};

export default Shop;