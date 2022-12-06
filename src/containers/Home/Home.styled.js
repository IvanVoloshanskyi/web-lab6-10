import styled from "styled-components";

export const HomeContainer = styled.div`
    padding: 13rem 0 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13rem;
    img {
        width: 35%;
        
    }
    button {
        height: 4rem;
        width: 15rem;
        background: #424242;
        color: white;      
        border: none;
        border-radius: 0.75rem; 
        font-weight: 600;
        font-size: 1.5rem;
        cursor: pointer; 
    }
`

export const Heading = styled.section`
    width: 90%;
    display: flex;
    gap: 3rem;

    
`

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const Title = styled.div`
    font-weight: 600;
    font-size: 3rem;
    color: #333333;
`

export const Description = styled.div`
    font-size: 1.5rem;
    color: #444444;
`

export const ContentShips = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    
`

export const Tiles = styled.section`
    width: 90%;
    display: flex;
    gap: 8rem;
    justify-content: space-between;
    flex-wrap: wrap;

    .hidden {
        display: none;
    }
`