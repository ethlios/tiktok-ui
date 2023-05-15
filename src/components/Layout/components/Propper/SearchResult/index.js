import clsx from 'clsx';
import styles from './SearchResult.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

const searchLists = [
    {
        id: 1,
        title: 'Võ Karate',
    },
    {
        id: 2,
        title: 'Trend bạn thân ơi',
    },
    {
        id: 3,
        title: 'Ngày lang thang - Đen Vâu',
    },
    {
        id: 4,
        title: 'LOL - Liên minh huyền thoại',
    },
    {
        id: 5,
        title: 'Nhạc sống Hà Tây',
    },
    {
        id: 6,
        title: 'Khả Bảnh múa quạt đẳng cấp',
    },
    {
        id: 7,
        title: 'Coder nghề đáng sống',
    },
    {
        id: 8,
        title: 'Giải cứu Coder',
    },
    {
        id: 9,
        title: 'Nô lệ đam mê - Coder',
    },
];

function SearchResult() {
    const [title, setTitle] = useState('');

    return (
        <ul className={cx('search-list')}>
            {searchLists.map((list) => (
                <li key={list.id} onMouseOver={(e) => setTitle(list.title)}>
                    <span
                        className={cx('circle', {
                            'hot-search': list.id === 1 ? true : false,
                            'hot-tiktok': list.id === 2 ? true : false,
                            'hot-trend': list.id === 3 ? true : false,
                        })}
                    ></span>
                    <h4 className={cx('text')}>{list.title}</h4>
                </li>
            ))}
        </ul>
    );
}

export default SearchResult;
