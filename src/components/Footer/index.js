import classNames from 'classnames/bind';
import grid from '../DefaultLayout/Grid.module.scss';
import styles from './Footer.module.scss';

const gr = classNames.bind(grid);
const cx = classNames.bind(styles);
function Footer() {
    const footer__content = classNames(cx('footer__content'));
    const gird = classNames(gr('col', 'l-4', 'm-4', 'c-4'));
    return (
        <footer className={cx('footer')}>
            <div className={gr('grid', 'wide')}>
                <div className={gr('row')}>
                    <div className={`${footer__content} ${gird}`}>
                        <h3 className={cx('footer__heading')}>Service & Support</h3>
                        <ul className={cx('footer__list')}>
                            <li className={cx('footer__item')}>Trung tâm trợ giúp</li>
                            <li className={cx('footer__item')}>0334667783</li>
                            <li className={cx('footer__item')}>Locations</li>
                        </ul>
                    </div>
                    <div className={`${footer__content} ${gird}`}>
                        <h3 className={cx('footer__heading')}>Info</h3>
                        <ul className={cx('footer__list')}>
                            <li className={cx('footer__item')}>Consignment Terms</li>
                            <li className={cx('footer__item')}>Connect with Us</li>
                            <li className={cx('footer__item')}>Delivery and Return</li>
                            <li className={cx('footer__item')}>FAQs</li>
                        </ul>
                    </div>
                    <div className={`${footer__content} ${gird}`}>
                        <h3 className={cx('footer__heading')}>Follow Us</h3>
                        <ul className={cx('footer__list')}>
                            <li className={cx('footer__item')}>Facebook</li>
                            <li className={cx('footer__item')}>Instagram</li>
                            <li className={cx('footer__item')}>Youtube</li>
                        </ul>
                    </div>
                </div>
                <div className={cx('footer__bottom')}>
                    <div className={cx('grid wide')}>
                        <p className={cx('footer__text')}>Copyright © ShoesShop</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
