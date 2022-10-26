import React from "react";
import Header from "./Header/Header";
import Home from "../Home/Home";
import Footer from "./Footer/Footer";
import Catalog from "./Catalog/Catalog";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const shipsArray = [
    {
        title: "Amazing stuff",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
        price: "10",
        imagesrc: "https://i.postimg.cc/yNm4Y1rt/ship3.webp",
        id: 1
    },
    {
        title: "Amazing stuff",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
        price: "20",
        imagesrc: "https://i.postimg.cc/TPw7BRvn/ship4.jpg",
        id: 2
    },
    {
        title: "Amazing stuff",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
        price: "30",
        imagesrc: "https://i.postimg.cc/yNm4Y1rt/ship3.webp",
        id: 3
    },
    {
        title: "Amazing stuff",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
        price: "40",
        imagesrc: "https://i.postimg.cc/TPw7BRvn/ship4.jpg",
        id: 4
    },
    {
        title: "Amazing stuff",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
        price: "50",
        imagesrc: "https://i.postimg.cc/yNm4Y1rt/ship3.webp",
        id: 5
    }
]

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<><Header /><Home /> <Footer/></>} />
                    <Route exact path="/catalog" element={<><Header/><Catalog shipsArray={shipsArray}/><Footer/></>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
