import styled from "styled-components";

export const CatalogItemContainer = styled.div`
    border: 0.1rem solid black;
    border-radius: 1rem;
    height: 30rem;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        height: 12rem;
        width: 100%;
        overflow: hidden;
        border-radius: 1rem 1rem 0 0;
    }
    .text-contents {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
    }
    .title {
        font-weight: 800;
        font-size: 2rem;
        color: #333333;
    }
    .description {
        color: #444444;
    }
    .price-content {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .price-title {
        color: #444444;
    }
    .price {
        margin-right: 2rem;
        color: #333333;
        font-weight: 600;
    }
    .link {
        margin: 20px 0 0 0;
        color: white;
        background-color: #424242;
        border: none;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.75rem;
        width: 90%;
        height: 10%;
        cursor: pointer;
        .text {
            font-size: 1rem;
            text-align: center;
            
        }
    }
`