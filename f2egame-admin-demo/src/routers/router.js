import Demand from '../views/demand/Demand.vue';
import error403 from '../views/errorpage/403.vue';
import menus from '../routers/menu';


const Routers = [{
        path: '/',
        redirect: '/demand',
        name: '首页',
        meta: {
            id: 1,
            icon: 'fa-dashboard',
            keep: true
        },
    },
    {
        path: '/403',
        component: error403,
        hidden: true,
        meta: {
            id: 2
        }
    },

].concat(menus);

export default Routers;