import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    primary = false,
    secondary = false,
    small = false,
    large = false,
    light = false,
    disable = false,
    leftIcon = false,
    rightIcon = false,
    onClick,
    ...passProps
}) {
    let Comp = 'div';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        Comp = Link;
        props.to = to;
    }

    if (href) {
        Comp = 'a';
        props.href = href;
    }

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        primary,
        secondary,
        small,
        large,
        light,
        disable,
        [leftIcon]: leftIcon,
        [rightIcon]: rightIcon,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;
