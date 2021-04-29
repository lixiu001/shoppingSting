import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例 
  const instance = axios.create({
    baseUrl: 'http://123.207.32.32:8000',
    timeout: 5000
  })
}

//  请求拦截器中可以完成的事情：
// 1.当发送请求网络时，在页面添加一个loding组件，作为动画
// 2.某些请求要求用户必须登录，判断用户是否具有token，若没有token，跳转到login登录页面
// 3.对请求的参数进行序列化
// instance.interceptors.request.use(config=>{
//    config.data = qs.string(config.data)
//    return config
// })
// 4. 请求拦截中错误拦截较少，通常时配置相关的拦截：可能的错误如请求超时，可以将页面跳转到一个错误页面


// 响应拦截中可以完成的事情：
// 1.响应的成功拦截中，主要是对数据进行过滤
// instance.interceptors.responce.use({
//  return response.data
// })
// 2.响应的失败拦截中，可根据status判断报错的错误码，跳转到不同的错误提示页面
// },err => {
  // if(err && err.response) {
    // switch (err.ersopnse.status) {
      // case 400:
      //    err.message="请求错误"
      //    break
      // case 401:
      //    err.meaasge="未授权的访问"
      //    break
    // }
  // }
  // return err
// }

