import router from '../routers/index';
import API from '../api';
var permissionIds = [1, 2, 3, 4, 6, 7, 8];

var permission = {
    bindChangePage() {
        // 路由跳转之前
        router.beforeEach((to, from, next) => {
            var routeList = [];
            f2eGame.port.udb.isLogin().then(res => {
                if (res) { // 判断是否已经登录
                    if (this.hasPermission(to.meta.id) && to.meta.id !== undefined) {
                        var index = routeList.indexOf(to.name)
                        if (index !== -1) {
                            //如果存在路由列表，则把之后的路由都删掉
                            routeList.splice(index + 1, routeList.length - index - 1)
                        } else {
                            routeList.push(to.name)
                        }
                        to.meta.routeList = routeList;
                        next() //
                    } else {
                        next({
                            path: '/401',
                            replace: true,
                            query: {
                                noGoBack: true
                            },
                            meta: {
                                id: 1
                            }
                        })
                    }
                } else {
                    Common.login()
                }
            });
        })
    },
    // 更新菜单权限
    updateMenulist(menuRouter) {
        let menuList = [];
        menuRouter.forEach((item, index) => {
            if (item.meta.id !== undefined && this.hasPermission(item.meta.id)) {
                if (item.children === undefined || item.children.length === 0) {
                    menuList.push(item);
                } else {
                    let len = menuList.push(item);
                    let childrenArr = [];
                    childrenArr = this.updateMenulist(item.children);
                    menuList[len - 1].children = childrenArr;
                }
            }
        });
        return menuList;
    },
    // 权限判断
    hasPermission(id) {
        // if (roles.indexOf('admin') >= 0) return true // admin 直接进入页面
        if (permissionIds.length === 0) return false;
        return permissionIds.indexOf(id) >= 0;
    }
}

export default permission;