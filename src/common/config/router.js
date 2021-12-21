/* 
    1.index/index,shop/index以index结尾的,path和name默认去除index
    2.shop/list,默认生成name为shop_list(如果结尾为index,如shop/index,则为shop)
    3.填写后不会自动生成
*/

let routes = [{

    path: '/',
    name: "layout",
    redirect: { name: 'index' }, //默认跳转主页面
    //component: () =>import ("../../views/layout.vue"),
    component: 'layout',
    children: [{
        // path: '/index',
        // name: 'index',
        //component: () =>import ('../../views/index/index.vue')
        component: 'index/index'
    }, {
        component: 'message/message'
    }, {
        component: 'Journalism/Journalism'
    }, {
        component: 'product/product'
    }, {
        component: 'About/About'
    }]
}, {
    // path: '/login',
    // name: 'login',
    //component: () =>import ('../../views/login/index.vue')
    component: 'login/index'
}, {
    path: '*',
    redirect: { name: 'index' }
}]

// 获取路由参数
let getRoutes = function() {
        // 自动生成路由
        createRoute(routes)
        return routes
    }
    // 自动生成路由
function createRoute(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].component) return
            // 去除index
        let val = getValue(arr[i].component)
            // 生成name
        arr[i].name = arr[i].name || val.replace(/\//g, '_')
            // 生成path
        arr[i].path = arr[i].path || `/${val}`
            // 自动生成component
        let componentFun =
            import (`../../views/${arr[i].component}.vue`)
        arr[i].component = () => componentFun
        if (arr[i].children && arr[i].children.length > 0) {
            createRoute(arr[i].children)
        }
    }
}

// 去除index
function getValue(str) {
    // str = login/index
    // 获取最后一个/的索引
    let index = str.lastIndexOf('/');
    // 获取最后一个后面/的值
    let val = str.substring(index + 1, str.length);
    // 判断是不是index结尾
    if (val === 'index') {
        return str.substring(index, -1);
    }
    return str
}
// 导出数组
export default getRoutes()