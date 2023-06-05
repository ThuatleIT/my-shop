import classNames from 'classnames/bind';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);
function Register() {
    return (
        <div className={cx('register')}>
            <div className={cx('register__inner')}>
                <h2>register</h2>
                <form action="" method="">
                    <input type="text" placeholder="Name"></input>
                    <input type="text" placeholder="Email"></input>
                    <input type="password" placeholder="Password" name="password"></input>
                    <input type="password" placeholder="Confirm Password" name="password2"></input>
                    <button type="submit">CREATE</button>
                </form>
            </div>
            <div className={cx('text-center')}>
                <p>
                    <a href="">you have a account?</a>
                </p>
                <p>
                    <a href="">forgot password?</a>
                </p>
            </div>
        </div>
    );
}

export default Register;
