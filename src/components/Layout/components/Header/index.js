import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Button from '../Button';
import { Menu } from '../Propper';
import Image from '../Image';
import Search from '../Search';
import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path
import { SearchResult } from '../Propper';

import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '../Propper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
    Mailbox,
    Message,
    User,
    Feedback,
    Coins,
    Language,
    Setting,
    SignOut,
    Theme,
    Keyboard,
    Ellipsis,
} from '../Icon';

const cx = classNames.bind(styles);

const menuOptions = [
    {
        icon: <Language />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    id: 1,
                    title: 'Tiếng Việt',
                },
                {
                    id: 2,
                    title: 'English',
                },
                {
                    id: 3,
                    title: 'Español',
                },
                {
                    id: 4,
                    title: 'Português (Brasil)',
                },
                {
                    id: 5,
                    title: 'Deutsch',
                },
                {
                    id: 6,
                    title: '日本語（日本）',
                },
                {
                    id: 7,
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    id: 8,
                    title: 'Français',
                },
            ],
        },
    },
    {
        icon: <Feedback />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <Keyboard />,
        title: 'Phím tắt trên màn hình',
    },
    {
        icon: <Theme />,
        title: 'Chế độ tối',
    },
];

const menuAccount = [
    {
        icon: <User />,
        title: 'Xem hồ sơ',
        to: '/@ethlios293',
    },
    {
        icon: <Coins />,
        title: 'Nhận xu',
    },
    {
        icon: <Setting />,
        title: 'Cài đặt',
    },
    ...menuOptions,
    {
        icon: <SignOut />,
        title: 'Đăng xuất',
        cross: true,
    },
];

function Header() {
    const [lists, setLists] = useState([]);

    const userSignup = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Tiktok"></img>
            </div>
            <HeadlessTippy
                interactive
                visible={lists.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <p className={cx('title')}>Bạn có thể thích</p>
                            <SearchResult />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('serchbox')}>
                    <input
                        type="text"
                        placeholder="Tìm kiếm"
                        spellCheck={false}
                        onFocus={(e) => setLists([1, 2, 3])}
                        onBlur={(e) => setLists([])}
                        onChange={(e) => {
                            setLists([]);
                            return setTimeout(() => {
                                setLists([1, 2, 3]);
                            }, 1000);
                        }}
                    ></input>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* <FontAwesomeIcon icon={faSpinner} className={cx('loading')} /> */}
                    <button className={cx('search-btn')}>
                        <Search />
                    </button>
                </div>
            </HeadlessTippy>
            <div className={cx('option')}>
                <Button light leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                    Tải lên
                </Button>
                {userSignup ? (
                    <>
                        <Tippy content={'Tin nhắn'} placement="bottom">
                            <button className={cx('user-btn')}>
                                <Message />
                            </button>
                        </Tippy>
                        <Tippy content={'Hộp thư'} placement="bottom">
                            <button className={cx('user-btn')}>
                                <Mailbox />
                            </button>
                        </Tippy>

                        <Menu data={menuAccount}>
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/322713028_897374521264702_8742168292930724717_n.jpg?stp=dst-jpg_s480x480&_nc_cat=100&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=14xPco7XqAwAX9tdu9o&_nc_ht=scontent.fsgn8-2.fna&oh=00_AfCO2V2jSTKr2o9ImJM9dgM9XBAyr--1veyFeVHk-rbREQ&oe=64670281"
                                alt=""
                                fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/bf39d2c2b9de888874febe68b805d386~c5_100x100.jpeg?x-expires=1684321200&x-signature=%2BhwctE76DQ%2Bsth1sWI35%2BgjVR7Y%3D"
                            />
                        </Menu>
                    </>
                ) : (
                    <>
                        <Button primary>Đăng nhập</Button>
                        <Menu data={menuOptions}>
                            <button className={cx('more-btn')}>
                                <Ellipsis />
                            </button>
                        </Menu>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
