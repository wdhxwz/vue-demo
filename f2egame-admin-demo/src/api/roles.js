var userMap = {
    admin: {
        roles: ['admin'],
        token: 'admin',
        introduction: '我是超级管理员',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    chenshaoling: {
        roles: ['admin'],
        token: 'admin',
        introduction: '我是超级管理员',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    bbbbbbbb1413: {
        roles: ['editor'],
        token: 'editor',
        introduction: '我是编辑',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}
export default {
    getUserInfo: token => {
        if (userMap[token]) {
            return userMap[token]
        } else {
            return false
        }
    },
}