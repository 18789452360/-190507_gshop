/*
* ajax请求函数模块
* 返回值是promise对象
* */
import axios from 'axios'

export default function ajax (url, data={}, type='GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      // 准备 url query 参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {//Object.keys()方法会返回一个由一个给定对象的自身可枚举属性组成的数组。传入对象返回属性名
                                        /*// 例如：
                                            var data={a:1,b:2,c:9,d:4,e:5};
                                            console.log(data);//{a: 1, b: 2, c: 9, d: 4, e: 5}
                                            console.log(Object.keys(data));//["a", "b", "c", "d", "e"]
                                            Object.keys(data).map((key,item)=>{
                                            console.log(key,data[key]);//key=>属性名    data[key]=>属性值
                                            });
                                        */
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送 get 请求
      promise = axios.get(url)
    } else {
      // 发送 post 请求
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
        reject(error)
    })
  })
}
