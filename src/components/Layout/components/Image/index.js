import { forwardRef, useState } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';
import images from '~/assets/images';

function Image({ fallback: customFallback = images.noImage, className, src, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    // Xử lý logic khi ảnh bị hư
    const handleError = () => {
        setFallback(customFallback);
    };

    const classes = classNames(styles.wrapper, className);

    return (
        <img
            ref={ref}
            className={classes}
            src={fallback || src}
            {...props}
            onError={handleError}
        ></img>
    );
}

export default forwardRef(Image);
