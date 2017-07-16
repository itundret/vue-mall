import http from './public'
// 电脑列表
export const getComputer = (params) => {
  return http.fetchGet('/goods/computer', params)
}
// 获取购物车列表
export const getCartList = (params) => {
  return http.fetchPost('/users/cartList', params)
}
// 加入购物车
export const addCart = (params) => {
  return http.fetchPost('/goods/addCart', params)
}
// 删除购物车
export const delCart = (params) => {
  return http.fetchPost('/goods/delCart', params)
}
