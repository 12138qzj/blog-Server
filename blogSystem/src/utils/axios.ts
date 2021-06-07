import axios from 'axios';
import { cookie } from '@/utils/common'

import { message } from 'antd';

// variable
const has = Object.prototype.hasOwnProperty;

/**
 * 判断对象是否有属性
 * @param  {object} obj
 * @param  {string} key
 */
function hasProperty(obj: any, key: string) {
  return has.call(obj, key);
}


const request = (options: any): any => {
    // const { url, method, ...config  } = options;

    return axios(options)
    .then((data) => {
        return data;
      })
    .catch((err) => {
      if (hasProperty(err, 'errno') && err.err_show !== false) {
        message.error(err.errmsg || '好像出错了~');
        return err;
      }
      if (err.message && err.message.includes('timeout')) {
        message.error('请求超时~');
        return {};
      }
      // console.log('服务异常：', err.message);
      message.error('服务异常！');
      return {};
    });

    // if(method === 'GET') {
    //     axios.get(url)
    //     .then((res: any)=> {
    //         const { data, errmsg: errMsg, errno: errNo } = res;
    //         console.log('data', data, errMsg, errNo)
    //     })
    // }else{
    //     axios.post(url)
    //     .then((res: any)=> {
    //         const { data, errmsg: errMsg, errno: errNo } = res;
    //         console.log('object', errMsg, errNo)
    //     })
    // }

}

const get = (url: string, params: any = '', options: any = {} ): any => {
  // const env = getEnv();
  // const name = getCookie('username');
  return request({
    url,
    method: 'get',
    params,
    ...options,
  });
}

const post = (url: string, params: any = '', options: any = {} ): any => {
  // const env = getEnv();
  // const name = getCookie('username');
  return request({
    url,
    method: 'post',
    data: {
      ...params
    },
    headers: { 
      'x-csrf-token': cookie.get("csrfToken"),
    },
    ...options,
  });
}

export {
    request,
    get,
    post
}