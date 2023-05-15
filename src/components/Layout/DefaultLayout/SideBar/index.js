import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('content')}>
            <h1>SideBar</h1>
        </div>
    );
}

export default SideBar;
