import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Slick from 'react-slick';
import {Overlay,CloseBtn,Global,Header,ImageWrapper,Indicator,SlickWrapper,} from './styles';

const ImagesZoom = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <Overlay>
            <Global/>
            <Header>
                <h1>상세이미지</h1>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </Header>
            <SlickWrapper>
                <div>
                    <Slick
                        initialSlide={0}
                        beforeChange={(slide) => setCurrentSlide(slide)}
                        infinite
                        arrows={false}
                        slidesToScroll={1}
                    >
                        {images.map((v) => (
                            <ImageWrapper key={v.src}>
                                <img src={`http://localhost:3065/${v.src}`} alt={v.src} />
                            </ImageWrapper>
                        ))}
                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlide +1}
                            {' '}
                            /
                            {images.length}
                        </div>
                    </Indicator>
                </div>
            </SlickWrapper>
        </Overlay>

    )
}


ImagesZoom.protoType = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired
}

export default ImagesZoom;