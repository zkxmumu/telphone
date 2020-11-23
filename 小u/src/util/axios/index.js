import http from './axios'

// 登录
export function getLogin(data){
    return http.post('/login',data)
}

// 注册
export function getRegister(data){
    return http.post('/register',data)
}

// 获取分类信息(首页)
export function getCate(){
    return http.get('/getcate')
}

// 获取轮播图信息(首页)
export function getBanner(){
    return http.get('/getbanner')
}

// 获取限时秒杀信息(首页)
export function getSeckill(){
    return http.get('/getseckill')
}

// 获取商品信息(首页)
export function getIndexGoods(){
    return http.get('/getindexgoods')
}

// 获取分类树形结构
export function getCateTree(){
    return http.get('/getcatetree')
}

// 获取分类商品
export function getGoods(params){
    return http.get('/getgoods',{
        params
    })
}
// 获取一个商品信息
export function getGoodsInfo(params){
    return http.get('/getgoodsinfo',{
        params
    })
}

// 购物车列表
export function getCartList(params){
    return http.get('/cartlist',{
        params
    })
}

// 购物车添加
export function getCartAdd(data){
    return http.post('/cartadd',data)
}

// 购物车删除
export function getCartDelete(data){
    return http.post('/cartdelete',data)
}