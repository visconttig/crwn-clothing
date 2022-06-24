import { React } from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context.jsx";
import ProductCard from "../../components/product-card/product-card.component.jsx";
import { Fragment } from "react";

import "./shop-page.styles.scss";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => (
                <Fragment key={title}>
                    <h1>{title}</h1>
                    <div className="products-container">
                        {categoriesMap[title].map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))};
                    </div>
                </Fragment>
            ))}
        </Fragment>

        // {/* <div className="products-container">
        //     {/* {shopData.map((product) => (
        //         <ProductCard product={product} key={product.id}/>
        //     ))}; */}
        // </div> */}
    )
};

export default Shop;