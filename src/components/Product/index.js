import classNames from 'classnames/bind';
import grid from '../DefaultLayout/Grid.module.scss';
import styles from './Product.module.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';

import ProductItem from './ProductItem';

const cx = classNames.bind(styles);
const gr = classNames.bind(grid);
function Product() {
    const row = classNames(gr('row'));

    const wrapproduct = classNames(cx('wrap__product'));

    const [listProduct, setListProduct] = useState([]);

    async function getProduct() {
        try {
            const res = await axios.get('https://api.vuahanghieu.com/service/category/giay/products');
            const listGiay = res.data;

            return setListProduct(listGiay.products.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className={gr('grid', 'wide')}>
            <div className={`${wrapproduct} ${row}`}>
                {listProduct.slice(0, 30).map((product, index) => (
                    <ProductItem key={index} productId={product.id} product={product}></ProductItem>
                ))}
            </div>
        </div>
    );
}

export default Product;
