import classNames from 'classnames/bind';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('login')}>
            <div className={cx('login__inner')}>
                <h2>LOGIN</h2>
                <form action="" method="">
                    <input type="text" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <button type="submit">SIGN IN</button>
                </form>
            </div>
            <div className={cx('text-center')}>
                <p>
                    <a href="">create account</a>
                </p>
                <p>
                    <a href="">forgot password?</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
