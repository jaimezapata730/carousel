import React from "react";
import { render } from "@testing-library/react";
import Carousel from "./Carousel";

test('Carousel testing', function() {
    render(<Carousel 
            cardData={[
                { src: 'test1.jpg', caption: 'Caption1' },
                { src: 'test2.jpg', caption: 'Caption2' },
            ]}
            title="Test Carousel"
            />)
})