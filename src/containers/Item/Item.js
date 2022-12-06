
import { ItemContainer,
        ItemContent,
        ItemFooter }
        from "./Item.styled";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Item = ( { shipsArray } ) => {


    const id = useParams().id;
    let ship;
    shipsArray.forEach(element => {
        if (element.id.toString() === id.toString()) {
            ship = element;
        }
    });
    const title = ship.title;
    const description = ship.description;
    const price = ship.price;

    return(
        <ItemContainer>
            <ItemContent>

                <img src="https://i.postimg.cc/yNm4Y1rt/ship3.webp" alt=""></img>
                <div className="content-specs">
                    <div className="text-content">
                        <div className="title">{title}</div>
                        <div className="description">{description}</div>
                    </div>
                    <div className="specs">

                    </div>
                </div>
            </ItemContent>
            <ItemFooter>
                <div className="price">Price: {price}$</div>
                <div className="buttons">
                    <Link to="/catalog" className="back-button"><div>Go back</div></Link>
                    <button className="addtocart-button">Add to cart</button>
                </div>
            </ItemFooter>
        </ItemContainer>
    );
}

export default Item;