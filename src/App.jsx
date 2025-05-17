import Header from "./components/header/Header.jsx";
import "./App.css"
import SenseBlock from "./components/ui/sense_block/SenseBlock.jsx";
import Button from "./components/ui/button/Button";
import Carousel from "./components/carousel/Carousel.jsx";
import ButtonsHell from "./components/buttons-hell/ButtonsHell.jsx";

export default function App() {

    return (
        <>
            <Header />
            <SenseBlock
                id="tzedek"
                heading="Know your rights"
                text="AI-driven platform that helps people understand their legal and civil rights"
                little-header="TZEDEK"
                text-children={<Button blue={true} short={false} href="#functions">Learn More</Button>}>
                <img src="image.png" alt="Tzedek icon" style={{ "width": "100%" }} />
            </SenseBlock>
            <Carousel />
            <SenseBlock
                heading="don't be afraid"
                text="Tzedek is open-source, anyone can explore the code, or adapt it for their own needs">
                <div>
                    <img src="qr-code.svg" alt="Tzedek icon" style={{ borderRadius: "20%", "width": "100%", "mixBlendMode": "multiply" }} />
                    <Button
                        blue={false}
                        short={true}
                        style={{ "width": "85%", "marginTop": "-5%" }}
                        href="https://github.com/tzedek-app/tzedek"
                    >Check on GitHub</Button>
                </div>
            </SenseBlock>
            <ButtonsHell />
        </>
    )
}
