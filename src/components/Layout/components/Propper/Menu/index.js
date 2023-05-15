import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Wrapper from '../Wrapper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, data }) {
    const [history, setHistory] = useState([{ data: data }]);
    const current = history[history.length - 1];

    const Lists = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 600]}
            onHide={(e) => setHistory((prev) => prev.slice(0, 1))}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <Wrapper className={cx('item-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Ngôn ngữ"
                                onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
                            />
                        )}
                        {Lists()}
                    </Wrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
