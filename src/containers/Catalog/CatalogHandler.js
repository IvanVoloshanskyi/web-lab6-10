import React, { useState } from "react";
import Header from "../App/Header/Header";
import Catalog from "./Catalog";

const CatalogHandler = ( { shipsArray } ) => {
    const [input, setInput] = useState();

    const updateInput = (input) => {
        setInput(input);
    }

    return(
        <>
            <Header onInputSubmit={updateInput} />
            <Catalog shipsArray={shipsArray} input={input} />
        </>
    );
}

export default CatalogHandler;