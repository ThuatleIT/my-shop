import className from 'classnames/bind';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import styles from './Slider.module.scss';

import '@coreui/coreui/dist/css/coreui.min.css';

import { CCarousel, CCardImage, CCarouselItem } from '@coreui/react';
const cx = className.bind(styles);

function Slider({ list }) {
    return (
        <div className={cx('slide')}>
            <CCarousel interval={5000} controls indicators>
                {list.map((img, index) => (
                    <CCarouselItem key={index}>
                        <CCardImage className="d-block w-100" src={img.url} alt="slide 1" />
                    </CCarouselItem>
                ))}
            </CCarousel>
        </div>
    );
}

export default Slider;
