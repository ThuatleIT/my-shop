import classNames from 'classnames/bind';
import axios from 'axios';

import styles from './Detail.module.scss';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);
function Detail({ productId }) {
    const [infoProduct, setInfoProduct] = useState([]);

    async function getInfoProduct() {
        try {
            const res = await axios.get(
                `http://api.vuahanghieu.com/product?filters=code=h0${productId},status={active;achot;pending;order},not_for_sale=0&embeds=gallery,shipping_new,warranty_new,product_n_category,manufacturers&metric=first&service_token=tuPdWKrMRY`,
            );
            const info = res.data;
            return setInfoProduct(info.result);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getInfoProduct();
    }, []);

    return (
        <>
            <div className={cx('product__detail')}>
                <div className={cx('info')}>
                    <div className={cx('manufacturer')}>
                        <a href={infoProduct.manufacturer}>
                            <h4> {infoProduct.manufacturer}</h4>
                        </a>
                    </div>
                    <div className={cx('name')}>
                        <h4>{infoProduct.title}</h4>
                    </div>
                    <div className={cx('product_origin')}>
                        <p>Xuất sứ: {infoProduct.product_origin}</p>
                    </div>
                    <div className={cx('size')}>
                        <select defaultValue={'DEFAULT'}>
                            <option disabled value="DEFAULT">
                                Choose your size
                            </option>
                            <option value="1">7 US</option>
                            <option value="2">7.5 US</option>
                            <option value="3">8 US</option>
                        </select>
                    </div>
                    <div className={cx('price')}>
                        <div className={cx('priceOG')}>Giá gốc: {infoProduct.originPriceShow}</div>
                        <div className={cx('priceShow')}>Giá hiện tại: {infoProduct.priceShow}</div>
                    </div>
                    <button className={cx('add__cart')}>Add To Cart</button>
                </div>
                <div className={cx('image')}>
                    <img src={infoProduct.imageM} alt="" />
                </div>
            </div>
        </>
    );
}

export default Detail;
