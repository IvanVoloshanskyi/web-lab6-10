import React, {useState} from "react";
import { HomeContainer, Heading, TextContent, Title, Description, ContentShips, Tiles } from "./Home.styled";
import Tile from "./Tile/Tile";
import ship1 from "../../images/ship1.jpg";
import ship2 from "../../images/ship2.jpg";
import ship3 from "../../images/ship3.webp";
import ship4 from "../../images/ship4.jpg";

const tileDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat";

const Home = () => {

const [hidden, setHidden] = useState("hidden");
const [buttonText, setButtonText] = useState("View more");

const showOrHide = () => {
if (hidden === "hidden") {
    setHidden("");
    setButtonText("View less");
} else {
    setHidden("hidden");
    setButtonText("View more");
}
}

    return(
        <HomeContainer>
            <Heading>
            <img src={ship1} alt={"ship1"}></img>
            <TextContent>
                <Title>Heading</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</Description>
            </TextContent>
            </Heading>
            <ContentShips>
                <Tiles>
                    <Tile image={ship2} title="Tile 1 heading" description={tileDesc} id={1} />
                    <Tile image={ship3} title="Tile 2 heading" description={tileDesc} id={2} />
                    <Tile image={ship4} title="Tile 3 heading" description={tileDesc} id={3} />
                    <Tile image={ship2} title="Tile 4 heading" description={tileDesc} id={4} className={hidden} />
                    <Tile image={ship2} title="Tile 5 heading" description={tileDesc} id={5} className={hidden} />
                    <Tile image={ship2} title="Tile 6 heading" description={tileDesc} id={6} className={hidden} />
                </Tiles>
                <button onClick={() => showOrHide()}>{buttonText}</button>
            </ContentShips>
        </HomeContainer>
    );
};
export default Home;