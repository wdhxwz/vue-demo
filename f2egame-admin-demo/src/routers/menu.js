import Layout from '../views/layout/layout.vue';
import Demand from '../views/demand/Demand.vue';
import Detail from '../views/detail/detail';
import MultipleForm from '../views/form/multipleForm'
// import menus from '../routers/menu';
const page2 = { template: '<div>page2</div>' }
var menus = [{
        path: '/demand',
        name: 'demand',
        component: Layout,
        // redirect: '/demand/demand1',
        meta: {
            id: 2,
            icon: 'fa-dashboard',
        },
        children: [{
            path: 'demand1',
            name: 'demand1',
            component: Layout,
            meta: {
                id: 3
            },
            children: [{
                path: 'demand3',
                name: 'demand3',
                component: Demand,
                meta: {
                    id: 4
                }
            }, {
                path: 'demand4',
                name: 'demand4',
                component: Demand,
                meta: {
                    id: 5
                }
            }]
        }, {
            path: 'demand2',
            name: 'demand2',
            component: Demand,
            meta: {
                id: 6
            }
        }]
    },
    {
        path: '/detail',
        name: '详情页',
        component: Detail,
        hidden: false,
        meta: {
            id: 7,
            icon: 'fa-pie-chart'
        }
    },
    {
        path: '/multipleForm',
        name: '表单页',
        component: MultipleForm,
        hidden: false,
        meta: {
            id: 8,
            icon: 'fa-pie-chart'
        }
    }
];
export default menus;