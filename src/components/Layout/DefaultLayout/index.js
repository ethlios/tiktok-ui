import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import { Header } from '../components';
import SideBar from './SideBar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
