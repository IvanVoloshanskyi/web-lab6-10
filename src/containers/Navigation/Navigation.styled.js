import styled from 'styled-components';
// margin: 0 auto;
export const NavContainer = styled.div`
    margin-left: 460px;
    margin-right:200px;
    height: 100%;
    .selected {
        background-color: lightgray;
        font-weight: bold;
    }
    ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: 1rem;
        margin: 0;
        padding-inline-start: 0;
    }
    li {
        display: flex;
        align-items: center;
        height: 100%;
        
    }
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 2rem;
        border-radius: 1rem;
        height: 60%;
        font-size: 1rem;
        font-weight: 100;
    }
    .link {
        color: black;
        text-decoration: none;
        margin-bottom: 0.2rem;
    }
`