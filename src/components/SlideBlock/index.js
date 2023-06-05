import classNames from 'classnames/bind';
import styles from './SlideBlock.module.scss';
import grid from '../DefaultLayout/Grid.module.scss';
import block1 from '../../assets/images/block1.png';
import block2 from '../../assets/images/block2.png';
import block3 from '../../assets/images/block3.png';

const cx = classNames.bind(styles);
const gr = classNames.bind(grid);
function SlideBlock() {
    const grid = classNames(gr('grid', 'wide'));
    const gridRp = classNames(gr('col', 'l-4', 'm-6', 'c-12'));
    const slide__block = classNames(cx('slide__block'));
    const block = classNames(cx('block'));
    return (
        <div className={`${slide__block} ${grid}`}>
            <div className={gr('row')}>
                <div className={`${block} ${gridRp}`}>
                    <img className={cx('lazy')} src={block1} alt="" />
                    <div className={cx('desc')}>
                        <h2>
                            <a href="">streetwear</a>
                        </h2>
                    </div>
                </div>

                <div className={`${block} ${gridRp}`}>
                    <img className={cx('lazy')} src={block2} alt="" />
                    <div className={cx('desc')}>
                        <h2>
                            <a href="">sneaker</a>
                        </h2>
                    </div>
                </div>
                <div className={`${block} ${gridRp}`}>
                    <img className={cx('lazy')} src={block3} alt="" />
                    <div className={cx('desc')}>
                        <h2>
                            <a href="">accessories</a>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideBlock;
