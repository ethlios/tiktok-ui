import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <div className={cx('header-menu')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span className={cx('title')}>{title}</span>
        </div>
    );
}

export default Header;
