import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path
import { SearchResult } from '../Propper';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '../Propper';

const cx = classNames.bind(styles);

function Search() {
    const [lists, setLists] = useState([]);

    return (
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
    );
}

export default Search;
