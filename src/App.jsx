import Header from "./components/header/Header.jsx";
import "./App.css"
import SenseBlock from "./components/ui/sense_block/SenseBlock.jsx";
import Button from "./components/ui/button/Button";

export default function App() {
    return (
        <>
            <Header />
            <div className="sense-block-container">
            <SenseBlock
                heading="Know your rights"
                text="AI-driven platform that helps people understand their legal and civil rights"
                little-header="TZEDEK"
                text-children={<Button blue={true} short={false}>Learn More</Button>}>
                    <img src="/image.png" alt="Tzedek icon" style={{"width": "100%"}} />
            </SenseBlock>
            <SenseBlock
                heading="don't be afraid"
                text="Tzedek is open-source, anyone can explore the code, or adapt it for their own needs">
                    <div>
                <img src="/qr-code.svg" alt="Tzedek icon" style={{borderRadius: "20%", "width": "100%", "mixBlendMode": "multiply"}} />
                <Button blue={false} short={true} style={{"width": "85%", "marginTop": "-5%"}}>Check on GitHub</Button>
                </div>
            </SenseBlock>
            </div>
        </>
    )
}
