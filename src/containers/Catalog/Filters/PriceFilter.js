import React from "react";
import { useState } from "react";
import { FilterContainer } from "./Filters.styled";

const PriceFilter = ({ hiddenClassName, onChange } ) => {
    const [price, setPrice] = useState("all");

    return(
        <FilterContainer className={hiddenClassName}>
            <button onClick={() => {setPrice("all"); onChange("all");}} className={price === "all" ? "selected" : ""}>All</button>
            <button onClick={() => {setPrice("0to25"); onChange("0to25");}} className={price === "0to25" ? "selected" : ""}>0-25%</button>
            <button onClick={() => {setPrice("26to50"); onChange("26to50");}} className={price === "26to50" ? "selected" : ""}>25-50%</button>
            <button onClick={() => {setPrice("51to75"); onChange("51to75");}} className={price === "51to75" ? "selected" : ""}>50-75%</button>
            <button onClick={() => {setPrice("76to100"); onChange("76to100");}} className={price === "76to100" ? "selected" : ""}>75-100%</button>
        </FilterContainer>
    );
}

export default PriceFilter;