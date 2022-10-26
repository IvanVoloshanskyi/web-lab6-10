import React from "react";
import { Link } from "react-router-dom";
import { CatalogItemContainer } from "./CatalogItem.styled";

const CatalogItem = ( { title, description, price, imagesrc, id } ) => {
    return (
        <CatalogItemContainer>
            <img src={imagesrc} alt="ship"></img>
            <div className="text-contents">
                <div className="title">{title}</div>
                <div className="title-id">{id}</div>
                <div className="description">{description}</div>
                <div className="price-content">
                    <div className="price-title">Price:</div>
                    <div className="price">${price}</div>

                </div>
            </div>
            <Link to={"/item/" + id} className="link"><div className="text">View more</div></Link>
        </CatalogItemContainer>
    );
}

export default CatalogItem;