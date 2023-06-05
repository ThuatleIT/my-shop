//layout

import config from '../config';
import Home from '../pages/Home/Home';
import InfoProduct from '../pages/InfoProduct/InfoProduct';
import Nomatch from '../pages/Nomatch';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

//public Routes
const publicRoutes = [
    {
        path: config.rourtes.home,
        component: Home,
    },
    {
        path: config.rourtes.infoproduct,
        component: InfoProduct,
    },
    {
        path: config.rourtes.nomatch,
        component: Nomatch,
        layout: null,
    },
    {
        path: config.rourtes.login,
        component: LoginPage,
    },
    {
        path: config.rourtes.register,
        component: RegisterPage,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
