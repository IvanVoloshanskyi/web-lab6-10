import React from "react";
import { FooterContainer,
    FooterContent,
    FooterText,
    FooterTitle,
    FooterDescription,
    LogoShip,
    FooterLogos,
    FooterSeparator,
    Copyrights }
from "./Footer.styled";
import Logo from "../Logo/Logo";
import logo_fb from "../../../images/logo_fb.png";
import logo_tw from "../../../images/logo_tw.png";
import logo_lk from "../../../images/logo_lk.png";
import logo_gp from "../../../images/logo_gp.png";
import logo from "../../../images/logo.png";

const Footer = () => {
    return(
        <FooterContainer>
            <FooterContent bgImage={logo} >
                <FooterText>
                    <FooterTitle>Branding stuff</FooterTitle>
                    <FooterDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo</FooterDescription>
                </FooterText>
                <LogoShip src={logo} alt={"logo"} />
                <FooterLogos>
                    <Logo image={logo_fb} name="facebook" link="" />
                    <Logo image={logo_tw} name="twitter" link="" />
                    <Logo image={logo_lk} name="linkedin" link="" />
                    <Logo image={logo_gp} name="googleplus" link="" />
                </FooterLogos>
            </FooterContent>
            <FooterSeparator />
            <Copyrights>2022 IoT © Copyright all rights reserved</Copyrights>
        </FooterContainer>
    );
}

export default Footer;