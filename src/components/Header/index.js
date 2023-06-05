import {
    faCartShopping,
    faSearch,
    faUserCircle,
    faClose,
    faArrowLeft,
    faAngleRight,
    faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import config from '../../config';

const cx = className.bind(styles);
let value = 0;
function Header() {
    const dropdown = useRef(null);
    const search = useRef(null);
    const menuMobile = useRef(null);
    const modal = useRef(null);

    const hanldeClick = () => {
        const active = className(cx('active'));
        dropdown.current.classList.toggle(active);
    };

    const handleSearch = () => {
        const active = className(cx('active'));
        search.current.classList.toggle(active);
    };
    const handleMenuMobile = () => {
        const active = className(cx('active'));
        menuMobile.current.classList.toggle(active);
        modal.current.classList.toggle(active);
    };

    const HeaderDesktop = () => {
        return (
            <header>
                <div className={cx('menu')}>
                    <Link className={cx('title')} to={config.rourtes.home}>
                        <h3>Shoes Shop</h3>
                    </Link>
                    <div className={cx('inner-menu')}>
                        <nav className={cx('nav__pc')}>
                            <ul className={cx('nav__list')}>
                                <li>
                                    <a className={cx('menu-item')} href="new">
                                        New
                                    </a>
                                </li>
                                <li>
                                    <a className={cx('menu-item')} href="/Sale">
                                        Sale
                                    </a>
                                </li>
                                <li className={cx('adidas')}>
                                    <a className={cx('menu-item')} href="/adidas">
                                        Adidas
                                    </a>
                                    <div className={cx('menu__sub')}>
                                        <ul>
                                            <li>
                                                <a href="">ULTRABOOST</a>
                                            </li>
                                            <li>
                                                <a href="">ZX K2 BOOT</a>
                                            </li>
                                            <li>
                                                <a href="">ALPHABOUNCE</a>
                                            </li>
                                            <li>
                                                <a href="">EQT+</a>
                                            </li>
                                            <li>
                                                <a href="">X9000L4</a>
                                            </li>
                                            <li>
                                                <a href="">STAN SMITH</a>
                                            </li>
                                            <li>
                                                <a href=""> SUPERSTART</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={cx('nike')}>
                                    <a className={cx('menu-item')} href="/Nike">
                                        Nike
                                    </a>
                                    <div className={cx('menu__sub')}>
                                        <ul>
                                            <li>
                                                <a href=" ">SB DUNK </a>
                                            </li>
                                            <li>
                                                <a href=" ">JORDAN </a>
                                            </li>
                                            <li>
                                                <a href=" ">AIR FORCE 1 </a>
                                            </li>
                                            <li>
                                                <a href=" ">PEGASUS </a>
                                            </li>
                                            <li>
                                                <a href=" ">AiR MAX </a>
                                            </li>
                                            <li>
                                                <a href=" ">M2k </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={cx('menu-right')}>
                        <div className={cx('user')}>
                            <FontAwesomeIcon onClick={hanldeClick} className={cx('icon')} icon={faUserCircle} />
                            <div ref={dropdown} className={cx('dropdown__inner')}>
                                <ul>
                                    <li>
                                        <Link className={cx('link')} to={config.rourtes.login}>
                                            Log In
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className={cx('link')} to={config.rourtes.register}>
                                            Create Account
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('search')}>
                            <FontAwesomeIcon onClick={handleSearch} className={cx('icon')} icon={faSearch} />
                        </div>
                        <div className={cx('cart')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faCartShopping} />
                        </div>
                    </div>
                    <div ref={search} className={cx('searchPro')}>
                        <div className={cx('icon-right')}>
                            <span>
                                <FontAwesomeIcon onClick={handleSearch} className={cx('close')} icon={faClose} />
                            </span>
                        </div>
                        <form className={cx('search')}>
                            <input type="text" placeholder="Search" />
                            <button type="submit" className={cx('enter')}>
                                <span>
                                    <FontAwesomeIcon className={cx('enter')} icon={faArrowLeft} />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </header>
        );
    };

    const HeaderMobile = () => {
        return (
            <header>
                <div ref={modal} className={cx('modal__mobile')} onClick={handleMenuMobile}></div>
                <div className={cx('menu-mobile')}>
                    <div className={cx('menu-mobile-icon')} onClick={handleMenuMobile}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <Link className={cx('title')} to={config.rourtes.home}>
                        <h3>Shoes Shop</h3>
                    </Link>
                </div>

                <nav ref={menuMobile} className={cx('nav__mobile')}>
                    <div className={cx('nav__mobile-close')} onClick={handleMenuMobile}>
                        <FontAwesomeIcon icon={faClose} />
                    </div>

                    <ul className={cx('nav__mobile-list')}>
                        <li className={cx('nav__mobile-search')}>
                            <span className={cx('nav__mobile-list-icon')}>
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <input placeholder="Nhập sản phẩm cần tìm" type="search"></input>
                        </li>
                        <li>
                            <a href="" className={cx('nav__mobile-link')}>
                                ACCOUNT
                            </a>
                        </li>
                        <li>
                            <a href="" className={cx('nav__mobile-link')}>
                                CART
                            </a>
                        </li>
                        <li>
                            <a href="" className={cx('nav__mobile-link')}>
                                NEW
                            </a>
                        </li>
                        <li>
                            <a href="" className={cx('nav__mobile-link')}>
                                SALE
                            </a>
                        </li>
                        <li>
                            <a href="" className={cx('nav__mobile-link')}>
                                ADIDAS
                                <div className={cx('nav__mobile-link-icon')}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                            </a>
                            <ul className={cx('nav__mobile-link-list')}>
                                <li>ULTRABOOST</li>
                                <li>ZX K2 BOOT</li>
                                <li>ALPHABOUNCE</li>
                                <li>EQT+</li>
                                <li>X9000L4</li>
                                <li>STAN SMITH</li>
                                <li>SUPERSTART</li>
                            </ul>
                        </li>
                        <li>
                            <a href="" className={cx('nav__mobile-link')}>
                                NIKE
                                <div className={cx('nav__mobile-link-icon')}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                            </a>
                            <ul className={cx('nav__mobile-link-list')}>
                                <li>SB DUNK</li>
                                <li>JORDAN</li>
                                <li>AIR FORCE 1</li>
                                <li>PEGASUS</li>
                                <li>AiR MAX</li>
                                <li>M2k</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    };

    ///Responsive
    const useViewPort = () => {
        const [width, setWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleWindowResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleWindowResize);
            return () => window.removeEventListener('resize', handleWindowResize);
        }, []);

        return {
            width,
        };
    };

    const viewPort = useViewPort();
    const isMobile = viewPort.width <= 1024;

    if (isMobile) {
        return <HeaderMobile />;
    } else {
        return <HeaderDesktop />;
    }
}

export default Header;
