import React from "react";
import { render } from "@testing-library/react";
import Carousel from "./Carousel";

test('Should match snapshot', function() {
    const { asFragment } = 
    render(<Carousel 
            cardData={[
                { src: 'test1.jpg', caption: 'Caption1' },
                { src: 'test2.jpg', caption: 'Caption2' },
            ]}
            title="Test Carousel"
            />)
    expect (asFragment()).toMatchSnapshot();
});