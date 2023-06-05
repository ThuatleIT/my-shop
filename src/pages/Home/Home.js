import Product from '../../components/Product';
import SlideBlock from '../../components/SlideBlock';
import Slider from '../../components/Slider';

import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';

const listData = [
    {
        id: 1,
        url: img1,
    },
    {
        id: 2,
        url: img2,
    },
    { id: 3, url: img3 },
    { id: 4, url: img4 },
    { id: 5, url: img5 },
];

function Home() {
    return (
        <div>
            <Slider list={listData.slice(0, 3)}></Slider>
            <div className={'container'}>
                <div className={'content'}>
                    <h2>ALL PRODUCT</h2>
                    <Product />
                </div>
            </div>
            <Slider list={listData.slice(3, 5)}> </Slider>
            <div className={'container'}>
                <div className={'content'}>
                    <Product />
                    <SlideBlock />
                </div>
            </div>
        </div>
    );
}

export default Home;
