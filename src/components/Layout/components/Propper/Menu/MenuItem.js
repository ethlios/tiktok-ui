import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button';

const cx = classNames.bind(styles);
const defaultFFC = () => {};

function MenuItem({ data, onClick = defaultFFC }) {
    const classes = cx('menu-item', {
        cross: data.cross,
    });

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
