import React from "react";
import {
    CatalogContainer,
    FiltersContainer,
    ItemsContainer }
    from "./Catalog.styled";
import CatalogItem from "./CatalogItem/CatalogItem";
import { FiltersBorder, Filters } from "./Catalog.styled";
import { useState } from "react";

const Catalog = ( { shipsArray } ) => {
    const [isFiltersOn, setIsFiltersOn] = useState(false);
    const [ships] = useState(shipsArray);

    return(
        <CatalogContainer>
            <FiltersContainer>
                <Filters>
                    <button type="button"
                            onClick={() => setIsFiltersOn(!isFiltersOn)}
                            className={"filters " + (isFiltersOn ? "selected" : "")}>Filters</button>
                </Filters>
                <button>Apply</button>
            </FiltersContainer>
            <FiltersBorder />
            <ItemsContainer>
                {ships.map(ship => {
                    return <CatalogItem imagesrc={ship.imagesrc} title={ship.title} description={ship.description} price={ship.price} id={ship.id} />
                })}
            </ItemsContainer>
        </CatalogContainer>
    );
}

export default Catalog;