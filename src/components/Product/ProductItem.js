import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import grid from '../DefaultLayout/Grid.module.scss';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);
const gr = classNames.bind(grid);
function ProductItem({ product, productId }) {
    const gird = classNames(gr('col', 'l-4', 'm-6', 'c-6'));
    const style = classNames(cx('product'));

    const link = '/Giay/' + productId + '/' + product.slug;

    return (
        <div className={`${style} ${gird}`}>
            <Link to={link}>
                <div className={cx('product__img')}>
                    <img src={product.imageM} alt="" />
                </div>
            </Link>
            <div className={cx('product__item-info')}>
                <div className={cx('product__name')}>{product.name.slice(0, product.name.indexOf('Màu') - 1)}</div>
                <div className={cx('price')}>
                    <div className={cx('product__priceOG')}>{product.originPriceShow}</div>
                    <div className={cx('product__price')}>{product.priceShow}</div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
