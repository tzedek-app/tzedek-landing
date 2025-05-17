import React from "react";
import Button from "../ui/button/Button";
import { useState } from "react";
import SenseBlock from "../ui/sense_block/SenseBlock";
import "./Carousel.css"

export default function Carousel() {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            heading: "JUST SEND A MESSAGE",
            text: "All through Telegram. No apps, no forms — just send a message",
            image: "/image.png",
            button_text: "Messages",
        },
        {
            heading: "Question History",
            text: "All your questions and answers are saved — revisit them anytime. Easy access to your full history in one click",
            image: "/image.png",
            button_text: "Memory",
        },
        {
            heading: "multilingualism",
            text: "Russian, English, and Hebrew — switch to your preferred language anytime. The interface and all messages are fully localized",
            image: "/image.png",
            button_text: "Languages",
        },
    ];

    return (
        <div id="functions" className="carousel-container">
        <div 
            className="carousel-inner" 
            style={{ 
                transform: `translateX(-${activeSlide * 100}%)` 
            }}
        >
            {slides.map((slide, index) => (
                <div key={index} className="carousel-slide">
                    <SenseBlock
                        heading={slide.heading}
                        text={slide.text}
                    >
                        {slide.content || (
                            <img 
                                src={slide.image} 
                                alt="Slide image" 
                                style={{width: "100%"}} 
                            />
                        )}
                    </SenseBlock>
                </div>
            ))}
        </div>

        <div className="carousel-controls">
            {slides.map((_, index) => (
                <Button
                key={index}
                blue={activeSlide === index}
                onClick={() => setActiveSlide(index)}
                style={{marginBottom: "10px"}}
                >
                {slides[index].button_text}
                </Button>                   
            ))}
        </div>
    </div>
    )
}
