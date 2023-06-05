import classNames from 'classnames/bind';

import Footer from '../Footer';
import Header from '../Header';

import style from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(style);
function DefaultLayout({ children }) {
    return (
        <>
            <Header />

            <div className={cx('content')}>{children}</div>

            <Footer className={cx('footer')} />
        </>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
