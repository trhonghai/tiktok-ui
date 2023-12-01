import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/aafac68c65b5eec6d06c31d05e27a48f~c5_720x720.jpeg?x-expires=1701435600&x-signature=EAqAf1bzJNKC2XuChz0pYBZ6mw4%3D"
                alt="Hai"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Truong Hong Hai</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>trhonghai</span>
            </div>
        </div>
    );
}

export default AccountItem;
