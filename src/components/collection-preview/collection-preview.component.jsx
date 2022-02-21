import React from "react";
import "./collection-preview.styles.scss";

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview" >
        <h1 className="title" > {title.toUpperCase()} </h1>
        <div className="preview" >
            {
                items
                .filter((item, index) => (index < 4))
                .map((item) => (
                    <div key={item.id} >
                        <h1> {item.name} </h1>
                    </div>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;