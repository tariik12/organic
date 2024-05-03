
import { Outlet } from 'react-router-dom';

import MainNavbar from '../../../Components/Shared/MainNavbar/MainNavbar';
import Footer from '../../../Components/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;