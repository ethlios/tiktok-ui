import { Header } from '../components';
import SideBar from './SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div class="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
