import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Slick from 'react-slick';
import { backUrl } from '../../config/config';
import {Overlay,CloseBtn,Global,Header,ImgWrapper,Indicator,SlickWrapper,} from './styles';

const ImagesZoom = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <Overlay>
          <Global />
          <Header>
            <h1>상세 이미지</h1>
            <CloseBtn onClick={onClose}>X</CloseBtn>
          </Header>
          <SlickWrapper>
            <div>
              <Slick
                initialSlide={0}
                beforeChange={(slide, newSlide) => setCurrentSlide(newSlide)}
                infinite
                arrows={false}
                slidesToShow={1}
                slidesToScroll={1}
              >
                {images.map((v) => (
                  <ImgWrapper key={v.src}>
                    <img src={`${v.src.replace(/\/thumb\//, '/original/')}`} alt={v.src} />
                  </ImgWrapper>
                ))}
              </Slick>
              <Indicator>
                <div>
                  {currentSlide + 1}
                  {' '}
                  /
                  {images.length}
                </div>
              </Indicator>
            </div>
          </SlickWrapper>
        </Overlay>
      );
    };

ImagesZoom.protoType = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired
}

export default ImagesZoom;