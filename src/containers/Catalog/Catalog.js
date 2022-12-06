import React, { useEffect } from "react";
import {
    CatalogContainer,
    FiltersContainer,
    ItemsContainer }
    from "./Catalog.styled";
import PriceFilter from "./Filters/PriceFilter";
import CatalogItem from "./CatalogItem/CatalogItem";
import { FiltersBorder, Filters } from "./Catalog.styled";
import { useState } from "react";

const Catalog = ( { shipsArray, input } ) => {
    const [isFiltersOn, setIsFiltersOn] = useState(false);
    const [ships, setShips] = useState(shipsArray);
    const [price, setPrice] = useState("all");


    const onPriceChange = (price) => {
        setPrice(price);
    }


    useEffect(() => {
        setShips(ships.map(ship => {
            if (ship.title.search(input) !== -1 || input === "") {
                ship.hidden = "";
            } else {
                ship.hidden = "hidden";
            }

            return ship;
        }));
    }, [input]);

    const applyFilters = () => {
        setShips(ships.map(ship => {
            if (price !== "all") {
                switch (price) {
                    case "0to25":
                        if (ship.price > 25) {
                            ship.hidden = "hidden";
                        } else {
                            ship.hidden = "";
                        }
                        break;
                    case "26to50":
                        if (ship.price <= 25 || ship.price > 50) {
                            ship.hidden = "hidden";
                        } else {
                            ship.hidden = "";
                        }
                        break;
                    case "51to75":
                        if (ship.price <= 50 || ship.price > 75) {
                            ship.hidden = "hidden";
                        } else {
                            ship.hidden = "";
                        }
                        break;
                    case "76to100":
                        if (ship.price <= 75 || ship.price > 100) {
                            ship.hidden = "hidden";
                        } else {
                            ship.hidden = "";
                        }
                        break;
                    default:
                        ship.hidden = "";
                        break;
                }
            }
            else {
                ship.hidden = "";
            }
            return ship;
        }));
    }

    return(
        <CatalogContainer>
            <FiltersContainer>
                <Filters>
                    <button type="button"
                            onClick={() => setIsFiltersOn(!isFiltersOn)}
                            className={"filters " + (isFiltersOn ? "selected" : "")}>Filters</button>
                    <PriceFilter hiddenClassName={isFiltersOn ? "" : "hidden" } onChange={onPriceChange}/>

                </Filters>
                <button onClick={applyFilters}>Apply</button>
            </FiltersContainer>
            <FiltersBorder />
            <ItemsContainer>
                {ships.map(ship => {
                    return <CatalogItem imagesrc={ship.imagesrc} title={ship.title} description={ship.description} price={ship.price} id={ship.id} key={ship.id} hiddenClassName={ship.hidden ? ship.hidden : ""} />
                })}
            </ItemsContainer>
        </CatalogContainer>
    );
}

export default Catalog;