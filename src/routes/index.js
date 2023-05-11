import { Home } from '~/Pages';
import { Following } from '~/Pages';
import { Upload } from '~/Pages';
import { Profile } from '~/Pages';
import { HeaderOnly } from '~/components';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

// const privateRoutes = [];

export { publicRoutes };
