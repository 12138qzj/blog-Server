import { useState, useEffect } from 'react';
import axios from 'axios';

// 该文件目前只支持帮助中心的请求
interface StringArray {
  [key: string]: (url: string, params: any) => any;
}

const requestType: StringArray = {
  get: (url, params) => {
    const response = axios.get(url, { params: { ...params } });
    return response;
  },
  post: (url, params) => {
    const response = axios.post(url, params);
    return response;
  },
  delete: (url, params) => {
    const resposne = axios.delete(url, {
      data: { ...params },
    });
    return resposne;
  },
};
export const aFetch = async (type: string, url: string, params: any) => {
  try {
    let response = await requestType[type](url, params);
    const { data, errno, errmsg } = response.data;
    if (+errno === 0) {
      return data ? data : {};
    } else {
      return null;
    }
  } catch {
    console.error('ajax error');
    return null;
  }
};
export default function useFetch(props: any) {
  const [res, setRes] = useState({
    loading: true,
    data: null,
  });
  const stringProp = JSON.stringify(props);
  useEffect(() => {
    setRes({
      loading: true,
      data: null,
    });
    if (Array.isArray(props)) {
      const all = [];
      for (let i = 0, len = props.length; i < len; i++) {
        const { type, url, params } = props[i];
        all.push(aFetch(type, url, params));
      }
      Promise.all(all).then((e: any) => {
        setRes({
          data: e,
          loading: false,
        });
      });
    } else {
      const { type, url, params } = props;
      aFetch(type, url, params).then((data) => {
        setRes({
          data: data,
          loading: false,
        });
      });
    }
  }, [stringProp]);
  return res;
}
